const express = require('express')
const db = require('./../modules/connect-mysql')
const upload = require('./../modules/upload-video')
const fs = require('fs');
const thumbsupply = require('thumbsupply');
const Ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone');
const dayjs = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime')
const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(relativeTime)
dayjs.extend(customParseFormat)

const router = express.Router()

// --[取得影片清單資料 JOIN `story_like`]
router.get('/videos', async (req, res) => {
  const sql = "SELECT a.*, b.story_id AS likes_story_id, COUNT(*) AS likes_count FROM `story_all` AS a LEFT JOIN `story_like` AS b on a.story_id=b.story_id WHERE 1 GROUP BY a.story_id";
  let [rows] = await db.query(sql);

  rows = rows.map(el => {
    if (el.likes_story_id === null) {
      el.likes_count = 0
    }
    return el
  })

  res.json(rows)

});

// --[取得單一影片資料]
router.get('/video/:sid/data', async (req, res) => {
  const sid = parseInt(req.params.sid, 10);

  // --[SQL from `story_all JOIN `user`]
  const sql1 = "SELECT a.*, b.username, b.profile_image FROM `story_all` AS a JOIN `users` as b ON a.user_id=b.id WHERE `story_id`=?";
  const [rowsStory] = await db.query(sql1, sid);

  // --[SQL from `story_tag_link JOIN `story_tag_list`]
  const sql2 = "SELECT a.*, b.tag_name FROM `story_tag_link` AS a JOIN `story_tag_list` AS b ON a.tag_id=b.tag_id WHERE `story_id`=?;"
  const [rowsTags] = await db.query(sql2, sid);

  res.json({rowsStory, rowsTags});
});

// --[取得單一影片]
router.get('/video/:sid/get', async (req, res) => {
  const sid = req.params.sid;

  const sql = "SELECT * FROM `story_all` WHERE `story_id`=?";
  const [rows] = await db.query(sql, sid);

  const spath = rows[0].story_path

  const path = __dirname + `/../assets/${spath}.mp4`;
  const stat = fs.statSync(path);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1]
        ? parseInt(parts[1], 10)
        : fileSize-1;
    const chunksize = (end-start) + 1;
    const file = fs.createReadStream(path, {start, end});
    const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4',
    };
    res.writeHead(206, head);
    file.pipe(res);
  } else {
      const head = {
          'Content-Length': fileSize,
          'Content-Type': 'video/mp4',
      };
      res.writeHead(200, head);
      fs.createReadStream(path).pipe(res);
  }
})

// --[取得單一影片的縮圖]
router.get('/video/:spath/poster', (req, res) => {
  const path = `C:/ffmpeg/ffmpeg-master-latest-win64-gpl/bin`
  Ffmpeg.setFfmpegPath(`${path}/ffmpeg`);
  Ffmpeg.setFfprobePath(`${path}/ffprobe`);

  const story_path = req.params.spath
  thumbsupply.generateThumbnail(__dirname + `/../assets/${story_path}.mp4`)
  .then(thumb => res.sendFile(thumb));
});

// --[取得單一影片的留言]
router.get('/comment/:sid', async (req, res) => {
  
  const sid = req.params.sid

  const sql = "SELECT a.*, b.profile_image, b.username FROM `story_comment` AS a JOIN `users` as b ON a.user_id=b.id WHERE `story_id`=?"
  let [rows] = await db.query(sql, sid)

  rows = rows.map(el => {
    const commentTime = dayjs(el.time)
    const currentTime = dayjs()
    // .format('YYYY-MM-DD HH:mm:ss')

    const diffMonth = currentTime.diff(commentTime, 'month')
    if (diffMonth >= 1){
      el.time = `${diffMonth} 個月前`
      return el
    } 

    const diffDay = currentTime.diff(commentTime, 'day')
    if (diffDay >= 1){
      el.time = `${diffDay} 天前`
      return el
    } 

    const diffHour = currentTime.diff(commentTime, 'hour')
    if (diffHour >= 1){
      el.time = `${diffHour} 小時前`
      return el
    } 

    const diffMinute = currentTime.diff(commentTime, 'minute')
    if (diffMinute >= 1){
      el.time = `${diffMinute} 分鐘前`
      return el
    } 

    const diffSecond = currentTime.diff(commentTime, 'second')
    el.time = `${diffSecond} 秒前`
    return el
  })

  return res.json(rows)
})

// --[新增單一影片的一筆留言]
router.post('/comment/:sid', async (req, res) => {
  let output = {
    success: false,
    data: req.body,
    error: ''
  }

  const {sid} = req.params
  const {userId: uid, commentContent} = req.body

  const sql = "INSERT INTO `story_comment`(`story_id`, `user_id`, `content`, `time`) VALUES (?, ?, ?, NOW())"
  const [result] = await db.query(sql, [sid, uid, commentContent])

  if (result.affectedRows){
    output.success = true
  }

  return res.json(output)

})

// --[刪除單一影片的一筆留言]
router.get('/comment/:cid/delete', async (req, res) => {
  const cid = req.params.cid

  const sql = "DELETE FROM `story_comment` WHERE `comment_id`=?"
  const [result] = await db.query(sql, [cid])

  return res.json({success: !!result.affectedRows})
})

// --[取得單一影片的按讚數 / 確認 user 是否有按讚]
router.post('/video/:sid/like-count', async (req, res) => {
  const sid = req.params.sid
  const uid = +req.body.userId
  
  // --[取得單一影片的按讚數]
  const sql = "SELECT * FROM `story_like` WHERE `story_id`=?"
  const [rows] = await db.query(sql, sid)

  // --[確認 user 是否有按讚]
  if (!uid){
    return res.json({count: rows.length, liked: false})
  }

  const sql2 = "SELECT * FROM `story_like` WHERE `story_id`=? AND `user_id`=?"
  const [rows2] = await db.query(sql2, [sid, uid])

  return res.json({count: rows.length, liked: !!rows2.length})
})

// --[對單一影片按讚或取消按讚]
router.post('/video/:sid/like', async (req, res) => {
  const sid = req.params.sid
  const uid = +req.body.userId
  // console.log(sid, uid)
  
  const sql1 = "SELECT * FROM `story_like` WHERE `story_id`=? AND `user_id`=?"
  const [rows1] = await db.query(sql1, [sid, uid])

  if (rows1.length > 0){
    // --[如果原本已經按讚 => 取消按讚]
    const sql2 = "DELETE FROM `story_like` WHERE `story_id`=? AND `user_id`=?"
    const [result2] = await db.query(sql2, [sid, uid])
    return res.json({liked: false, result: result2})
  } else {
    // --[如果原本沒有按讚 => 按讚]
    const sql3 = "INSERT INTO `story_like`(`user_id`, `story_id`) VALUES (?, ?)"
    const [result3] = await db.query(sql3, [uid, sid])
    return res.json({liked: true, result: result3})
  }
})

// --[確認此影片的觀看數 & 對單一影片觀看次數 + 1]
router.get('/video/:sid/watched', async (req, res) => {
  let output = {
    success: false
  }

  const sid = req.params.sid

  const sql1 = "SELECT `times` FROM `story_all` WHERE `story_id`=?"
  const [rows1] = await db.query(sql1, [sid])

  const sql2 = "UPDATE `story_all` SET `times`=? WHERE `story_id`=?"
  const [result2] = await db.query(sql2, [rows1[0].times + 1, sid])
  output.success = !!result2.affectedRows

  return res.json(output)

})

// --[確認使用者有沒有收藏單一影片]
router.post('/video/:sid/check-collect', async (req, res) => {
  const sid = req.params.sid
  const uid = req.body.userId

  const sql = "SELECT * FROM `story_collect` WHERE `user_id`=? AND `story_id`=?"
  const [rows] = await db.query(sql, [uid, sid])

  return res.json({collected: !!rows.length})
})

// --[使用者收藏 or 取消收藏單一影片]
router.post('/video/:sid/collect', async (req, res) => {
  const sid = req.params.sid
  const uid = req.body.userId
  const colleced = +req.body.collected // 0 for false ; 1 for true

  const output = {
    success: false
  }

  if (colleced){
    const sql1 = "DELETE FROM `story_collect` WHERE `user_id`=? AND `story_id`=?"
    const [result1] = await db.query(sql1, [uid, sid])
    output.success = !!result1.affectedRows
  } else {
    const sql2 = "INSERT INTO `story_collect`(`user_id`, `story_id`) VALUES (?, ?)"
    const [result2] = await db.query(sql2, [uid, sid])
    output.success = !!result2.affectedRows
  }

  return res.json(output)
})

// --[取得使用者上傳的影片清單資料]
router.post('/my-videos', async (req, res) => {
  const uid = req.body.userId

  const sql = "SELECT a.*, b.story_id as likes_count_check, COUNT(*) AS likes_count FROM `story_all` AS a LEFT JOIN `story_like` AS b ON a.story_id=b.story_id WHERE a.user_id=? GROUP BY a.story_id;"
  let [rows] = await db.query(sql, [uid])

  rows = rows.map(el => {
    if (el.likes_count_check === null) {
      el.likes_count = 0
    }
    return el
  })

  res.json(rows)

});

// --[取得使用者收藏的影片清單資料]
router.post('/collect-videos', async (req, res) => {
  const uid = req.body.userId

  // --[`story_collect` JOIN `story_all` JOIN `story_like` ]
  const sql = "SELECT a.*, b.story_path, b.story_title, b.times, c.story_id AS likes_count_check, COUNT(*) AS likes_count FROM `story_collect` AS a JOIN `story_all` AS b ON a.story_id=b.story_id LEFT JOIN `story_like` AS c ON a.story_id=c.story_id WHERE a.`user_id`=? GROUP BY a.story_id;"
  let [rows] = await db.query(sql, [uid])

  rows = rows.map(el => {
    if (el.likes_count_check === null){
      el.likes_count = 0
    }
    return el
  })

  res.json(rows)
});


// --[上傳影片 && 影片資料]
router.post('/upload-video-try', [upload.array('story')], async (req, res) => {
  let output = {
    'req.files': req.files,
    'req.body': req.body,
    note: ''
  }

  console.log(output)

  const {saveFilename} = req.files[0]
  const {storyTitle, storyHashtags, uid} = req.body
  const tagsSplit = storyHashtags.split('#')
  const tagsTrimed = tagsSplit.filter(el => el !== '').map(el => {
    return el.trim()
  })
  const tagsUnion = tagsTrimed.map(el => {return `#${el}`}).join('')
  console.log(tagsTrimed)

  // --[story_all]
  const sql = "INSERT INTO `story_all`(`story_path`, `story_title`, `story_hashtags`, `times`, `likes`, `user_id`) VALUES (?, ?, ?, ?, ?, ?)"
  const [result] = await db.query(sql, [saveFilename, storyTitle, tagsUnion, 0, 0, uid])
  let storyId
  if (!!result.affectedRows){
    storyId = result.insertId
    output.note += `story_all success! story_id = ${storyId}\n`
  }

  // --[story_tag_list]
  let tagsAdd = []
  let add = 0
  let read = 0
  for (let i=0; i<tagsTrimed.length; i++){
    let element = tagsTrimed[i]

    // --[check exist]
    const sql2 = `SELECT * FROM \`story_tag_list\` WHERE tag_name='${element}';`
    // console.log('sql2', sql2)
    const [rows2] = await db.query(sql2)
    // console.log('rows2', rows2)

    // --[get tag_id if exist / add new tag and get tag_id]
    if (rows2.length > 0){
      tagsAdd.push({tagName: element, tag_id: rows2[0].tag_id})
      read += 1
    } else {
      const sql3 = "INSERT INTO `story_tag_list`(`tag_name`) VALUES (?)"
      const [result3] = await db.query(sql3, element)
      // console.log('result3', result3.insertId)
      tagsAdd.push({tagName: element, tag_id: result3.insertId})
      add += 1
    }
  }

  console.log('tagsAdd', tagsAdd)
  if (tagsAdd !== []){
    output.note += `story_tag_list success! read: ${read}; add: ${add}\n`
  }

  // --[story_tag_link]
  let count = 0
  const sql4 = "INSERT INTO `story_tag_link`(`story_id`, `tag_id`) VALUES (?, ?)"
  for (let i = 0; i < tagsAdd.length; i++){
    let tagId = tagsAdd[i].tag_id
    const [result4] = await db.query(sql4, [storyId, tagId])
    if (!!result4.affectedRows){
      count += 1
    }
  }
  if (count === tagsAdd.length){
    output.note += `story_tag_link success! add ${count} tags for story_id ${storyId}`
  }

  console.log(output.note)
  return res.json(output)
});


// --[刪除影片 && 影片資料]
router.post('/delete-video', async (req, res) => {
  let output = {
    note: ''
  }
  
  const {storyId} = req.body

  // --[story_all]
  const sql = "DELETE FROM `story_all` WHERE `story_id`=?"
  const [result] = await db.query(sql, [storyId])
  if (!!result.affectedRows){
    output.note += 'delete from `story_all`\n'
  }

  // --[story_collect]
  const sql2 = "DELETE FROM `story_collect` WHERE `story_id`=?"
  const [result2] = await db.query(sql2, [storyId])
  if (!!result2.affectedRows){
    output.note += 'delete from `story_collect`\n'
  }

  // --[story_comment]
  const sql3 = "DELETE FROM `story_comment` WHERE `story_id`=?"
  const [result3] = await db.query(sql3, [storyId])
  if (!!result3.affectedRows){
    output.note += 'delete from `story_comment`\n'
  }

  // --[story_like]
  const sql4 = "DELETE FROM `story_like` WHERE `story_id`=?"
  const [result4] = await db.query(sql4, [storyId])
  if (!!result4.affectedRows){
    output.note += 'delete from `story_like`\n'
  }

  // --[story_tag_link]
  const sql5 = "DELETE FROM `story_tag_link` WHERE `story_id`=?"
  const [result5] = await db.query(sql5, [storyId])
  if (!!result5.affectedRows){
    output.note += 'delete from `story_tag_link`'
  }

  return res.json(output)
})



// --[final]
module.exports = router