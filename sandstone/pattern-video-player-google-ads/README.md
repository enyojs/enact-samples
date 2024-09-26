## VideoPlayerGoogleAds pattern

A sample Enact application that demonstrates how to integrate Google Video Ads with Sandstone VideoPlayer.

Run `npm install` then `npm run serve` to have the app running on [http://localhost:8080](http://localhost:8080), where you can view it in your browser.

#### Enact Components Used
- `sandstone/MediaPlayer/MediaControls`
- `sandstone/ThemeDecorator`
- `sandstone/VideoPlayer`

To add Google Video Ads to your custom video player, you need to integrate the IMA3 HTML5 SDK. Refer to the [HTML5 video advertising guidelines](https://support.google.com/adsense/answer/6391192?hl=en&ref_topic=1706004&sjid=6550346971434809951-AP) for more information.

This example demonstrates how to integrate the IMA SDK into a Sandstone video player app, following the [IMA SDK tutorial](https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side). Please refer to the tutorial page for basic IMA SDK features.

The video player sample plays a single inline linear ad like the original tutorial.
To make the single inline linear ad playable in Enact video player, some details differ from the original tutorial:
- The `adContainer` node is placed in front of the `VideoPlayer` component to toggle the media controller by clicking the video layer.
- The `playPauseButton` is disabled before initializing IMA and during ad playback.
If you want to play another ad type, please adjust the sample to that type.
About the ad types, you can refer to [IMA sample tags](https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/tags).

Additionally, the sample shows how to add ads markers on progress bar. Please bring the timestamp information of custom ads and positon the markers on the time when the ads play.

For a more detailed view, check inside [App.js](src/App/App.js).

---

This project was bootstrapped with the Enact [cli](https://github.com/enactjs/cli).
