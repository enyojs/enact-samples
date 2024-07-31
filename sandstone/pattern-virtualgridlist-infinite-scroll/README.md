## VirtualGridList With Infinite Scroll Pattern

A sample Enact application that shows off how to load items with infinite scroll in VirtualGridList.

Run `npm install` then `npm run serve` to have the app running on [http://localhost:8080](http://localhost:8080), where you can view it in your browser.

#### Enact Components Used
- `sandstone/ImageItem`
- `sandstone/Panels/Header`
- `sandstone/Panels/Panel`
- `sandstone/VirtualList/VirtualGridList`

In this app, data is loaded when scrolling reaches the bottom of the virtualgridlist. Use your API server to fetch data to load.
Performance may decrease when using the `onScroll` handler, so use the `onScrollStop` handler like in the sample.

---

This project was bootstrapped with the Enact [cli](https://github.com/enactjs/cli).
