## VideoPlayerGoogleAds pattern

A sample Enact application that demonstrates how to play simple Google Video Ads with Sandstone VideoPlayer.

Run `npm install` then `npm run serve` to have the app running on [http://localhost:8080](http://localhost:8080), where you can view it in your browser.

#### Enact Components Used
- `sandstone/MediaPlayer/MediaControls`
- `sandstone/ThemeDecorator`
- `sandstone/VideoPlayer`

If you want to add Google Video Ads into your custom video player, you should integrate IMA3 HTML5 SDK. ([HTML5 video advertising guidelines](https://support.google.com/adsense/answer/6391192?hl=en&ref_topic=1706004&sjid=6550346971434809951-AP))

This is a simple example to show how to integrate IMA SDK into a sandstone video player app, following [IMA SDK tutorial](https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side). Please refer the tutorial page about basic IMA SDK features.

In this sample, some details are different with the original tutorial.
`adContainer` node is placed in front of the `VideoPlayer` component to toggle the media controller by clicking the video layer.
And `playPauseButton` is disabled before initializing IMA and during playing the ad.

You can find a more detailed view inside of [App.js](src/App/App.js)

---

This project was bootstrapped with the Enact [cli](https://github.com/enactjs/cli).
