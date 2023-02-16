const express = require('express')
const db = require('./../modules/connect-mysql')
const fs = require('fs');
const thumbsupply = require('thumbsupply');
const Ffmpeg = require('fluent-ffmpeg')

const router = express.Router()

const videos = [
  {
      id: 0,
      poster: '/video/0/poster',
      duration: '3 mins',
      name: 'Sample 1'
  },
  {
      id: 1,
      poster: '/video/1/poster',
      duration: '4 mins',
      name: 'Sample 2'
  },
  {
      id: 2,
      poster: '/video/2/poster',
      duration: '2 mins',
      name: 'Sample 3'
  },
];

router.get('/', (req, res) => {
  res.sendFile( __dirname + '../assets/001.mp4', { root: __dirname });

})

router.get('/videos', (req, res) => res.json(videos));

router.get('/video/:id/data', (req, res) => {
  const id = parseInt(req.params.id, 10);
  res.json(videos[id]);
});

router.get('/video/:id', (req, res) => {
  const path = __dirname + `/../assets/${req.params.id}.mp4`;
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

router.get('/video/:id/poster', (req, res) => {
  const path = `C:/ffmpeg/ffmpeg-master-latest-win64-gpl/bin`
  Ffmpeg.setFfmpegPath(`${path}/ffmpeg`);
  Ffmpeg.setFfprobePath(`${path}/ffprobe`);
  thumbsupply.generateThumbnail(__dirname + `/../assets/${req.params.id}.mp4`)
  .then(thumb => res.sendFile(thumb));
});



module.exports = router