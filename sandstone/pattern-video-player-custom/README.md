## VideoPlayerCustom Pattern

A sample Enact application that demonstrates how to add and play custom videos in the VideoPlayer.

Run `npm install` followed by `npm run serve` to start the app on [http://localhost:8080](http://localhost:8080), where you can view it in your browser.

#### Enact Components Used
- `sandstone/Button`
- `sandstone/Group`
- `sandstone/Panels/Header`
- `sandstone/Panels/Panel`
- `sandstone/RadioItem`
- `sandstone/Scroller`
- `sandstone/VideoPlayer`

The video data, including the URL, mime type, and subtitle, are stored in [videos.js](src/App/videos.js). For `m3u8` videos, the mime type should be `application/x-mpegURL`.
To enable `m3u8` video playback, the application uses [hls.js](https://github.com/video-dev/hls.js), which is imported in [App.js](src/App/App.js).

In [App.js](src/App/App.js), the application retrieves the video data from [videos.js](src/App/videos.js) and assigns the source and video element to the VideoPlayer based on the mime type.

This application demonstrates how to enable users to select the resolution of the `m3u8` video. The available resolutions are extracted from the `m3u8` file using `hls.js` and displayed in a dropdown menu. The selected resolution is then applied to the video playback.

Additionally, this example shows how to support subtitles in the WebVTT format (.vtt files). These subtitles can be displayed in the VideoPlayer. Please note that HTML video only supports subtitles in the WebVTT format.

For a more detailed view, check inside [App.js](src/App/App.js).

---

This project was bootstrapped with the Enact [cli](https://github.com/enactjs/cli).