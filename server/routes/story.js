const express = require('express')
const db = require('./../modules/connect-mysql')
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

// --[取得影片清單資料]
router.get('/videos', async (req, res) => {
  const sql = "SELECT * FROM `story_all` WHERE 1";
  const [rows] = await db.query(sql);

  res.json(rows)

});

// --[取得單一影片資料]
router.get('/video/:sid/data', async (req, res) => {
  const sid = parseInt(req.params.sid, 10);

  // --[SQL from `story_all JOIN `user`]
  const sql1 = "SELECT a.*, b.name, b.image_path FROM `story_all` AS a JOIN `user` as b ON a.user_id=b.user_id WHERE `story_id`=?";
  const [rowsStory] = await db.query(sql1, sid);

  // --[SQL from `story_tag_link JOIN `story_tag_list`]
  const sql2 = "SELECT a.*, b.tag_name FROM `story_tag_link` AS a JOIN `story_tag_list` AS b ON a.tag_id=b.tag_id WHERE `story_id`=?;"
  const [rowsTags] = await db.query(sql2, sid);

  res.json({rowsStory, rowsTags});
});

// --[取得單一影片]
router.get('/video/:sid', async (req, res) => {
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

// --[取的單一影片的留言]
router.get('/comment/:sid', async (req, res) => {
  
  const sid = req.params.sid

  const sql = "SELECT a.*, b.image_path, b.name FROM `story_comment` AS a JOIN `user` as b ON a.user_id=b.user_id WHERE `story_id`=?"
  let [rows] = await db.query(sql, sid)

  rows = rows.map(el => {
    const commentTime = dayjs(el.time)
    const currentTime = dayjs()
    // .format('YYYY-MM-DD HH:mm:ss')

    const diffMonth = currentTime.diff(commentTime, 'month')
    if (diffMonth > 1){
      el.time = `${diffMonth} 個月前`
      return el
    } 

    const diffDay = currentTime.diff(commentTime, 'day')
    if (diffDay > 1){
      el.time = `${diffDay} 天前`
      return el
    } 

    const diffHour = currentTime.diff(commentTime, 'hour')
    if (diffHour > 1){
      el.time = `${diffHour} 小時前`
      return el
    } 

    const diffMinute = currentTime.diff(commentTime, 'minute')
    if (diffMinute > 1){
      el.time = `${diffMinute} 分鐘前`
      return el
    } 

    const diffSecond = currentTime.diff(commentTime, 'second')
    el.time = `${diffSecond} 秒前`
    return el
  })

  return res.json(rows)
})



module.exports = router