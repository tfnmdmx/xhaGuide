
var allNotices = require('../../utils/allNotices.js')
Page({
  data: {
    allNotices: allNotices.allNotices,
  },
  onLoad(options) {
    console.log('allNotices', this.data.allNotices.length)
    
    wx.setStorage({
      key: "notices",
      data: this.data.allNotices.length
    })
  },
})