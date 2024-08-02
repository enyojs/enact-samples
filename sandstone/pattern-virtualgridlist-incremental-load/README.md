## Incremental Data Loading in VirtualGridList Pattern

A sample Enact application that demonstrates how to load items incrementally in a VirtualGridList.

Run `npm install` then `npm run serve` to have the app running on [http://localhost:8080](http://localhost:8080), where you can view it in your browser.

#### Enact Components Used
- `sandstone/ImageItem`
- `sandstone/Panels/Header`
- `sandstone/Panels/Panel`
- `sandstone/VirtualList/VirtualGridList`

In this app, data is loaded as you scroll to the bottom of the VirtualGridList. Use your API server to fetch data to load.
Performance may decrease when using the `onScroll` handler, so use the `onScrollStop` handler as shown in the sample.

---

This project was bootstrapped with the Enact [cli](https://github.com/enactjs/cli).
