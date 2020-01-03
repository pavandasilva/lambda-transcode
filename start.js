const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffprobePath = require('@ffprobe-installer/ffprobe').path;
const fs = requore('fs');
const ffmpeg = require('fluent-ffmpeg');

ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);

const sourceFilePath = 'videos/1.mp4';

ffmpeg(sourceFilePath)
.on('filenames', function(filenames) {
    console.log('screenshots are ' + filenames.join(', '));   
})
.on('end', function() {
    console.log('screenshots were saved');

    fs.createReadStream('thumbnails/1.png')

    return s3.uploadObject(bucket, key, fs.createReadStream(tmpPath), "image/jpg").then(() => {
        console.log("Thumbnail uploaded with successful");
    });

})
.on('error', function(err) {
    console.log('an error happened: ' + err.message);
})
// take 1 screenshots at predefined timemarks and size
.takeScreenshots({ count: 1, size: '1280x720', filename: '1' }, "thumbnails/");