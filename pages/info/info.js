var allMarkers = require('../../utils/allMarkers.js')
var allWords = require('../../utils/allWords.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markerId: -1,
    markerInfo: {},

    allWords: allWords.allWords,
    wordList: []
  },
  getWordList() {
    var res = []
    for (const i of this.data.allWords) {
      if (i.markerId.length == 0) continue
      if (i.markerId.indexOf(parseInt(this.data.markerId)) != -1) {
        res.push(i)
      }
    }
    this.setData({
      wordList: res
    })
    console.log('getWordList',res)
  },
  onLoad(options) {
    console.log('onLoad',options)
    this.setData({
      markerId: options.markerId
    })
    for (const i of allMarkers.allMarkers) {
      if (i.id == options.markerId) {
        this.setData({
          markerInfo: i
        })
      }
    }
    this.getWordList()
  },
  clickImg: function (e) {
    var currentUrl = e.currentTarget.dataset.url;
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.markerInfo.imageList, // 需要预览的图片http链接列表，注意是数组
      fail: function (err) {
        console.log('放大图片失败', err)
        wx.showToast({
          title: '放大图片失败',
          icon: 'none'
        })
      },
    })
  },

  jump(event) {
    // 获取到跳转锚点id
    let id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/word/word?id=' + id, // 通过url传到跳转页面
    })
  },
})