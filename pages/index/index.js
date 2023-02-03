var allMarkers = require('../../utils/allMarkers.js')
var allWords = require('../../utils/allWords.js')
var allNotices = require('../../utils/allNotices.js')
var allPolylines = require('../../utils/allPolylines.js')
var animation = wx.createAnimation({
  duration: 1000,
  timingFunction: 'ease',
})

Page({
  data: {
    latitude: 35.772700,
    longitude: 120.028608,
    allMarkers: allMarkers.allMarkers,
    allTypes: allMarkers.allTypes,
    allWords: allWords.allWords,
    allPolylines: allPolylines.allPolylines, //所有道路 -天蓝
    guidePolylines: allPolylines.guidePolylines, //导航路线-红
    busPolylines: allPolylines.busPolylines, //小公交路线-海蓝
    curMarkers: [],
    curPolylines: [],

    TabCur: 0,
    scrollLeft: 0,

    BarCur: -1, //废弃
    bar0: false,
    bar1: false,
    bar2: false,
    scale: 14, //定位
    modalName: '', //关于

    noticesRead: 0, //已读公告的个数
    noticesCount: allNotices.allNotices.length, //全部公告的个数

    sideAni: {},
  },
  onLoad: function () {
    animation.translateY(500).step()
    console.log('_500')
    this.setData({
      sideAni: animation.export()
    })
    var that = this
    wx.getStorage({
      key: 'noticesRead',
      success(res) {
        that.setData({
          noticesRead: res.data
        })
        console.log('getStorage ', that.data.noticesRead)
      }
    })

    this.data.mapCtx = wx.createMapContext('map')
    this.data.mapCtx.initMarkerCluster({
      enableDefaultStyle:true,//启用默认的聚合样式
      zoomOnClick:false,//点击已经聚合的标记点时是否实现聚合分离，点击后，标记点出现在屏幕边缘
      gridSize:60,//聚合算法的可聚合距离
      complete(res){
        console.log('initMarkerCluster',res)
      }
    })
    this.data.mapCtx.addGroundOverlay({
      id: 0,
      src: "https://s1.ax1x.com/2023/02/03/pSsrXZT.jpg",//路过图床，原图经过_bigjpg_降噪
      bounds: {
        southwest: { //西南角-左下角,
          latitude: 35.767800,
          longitude: 120.015300,
        },
        northeast: { //东北角-右上角,
          latitude: 35.780500,
          longitude: 120.046900,
        }
      },
      success(res) {
        console.log('贴图成功', res)
      },
      fail(err) {
        console.log('贴图失败', err)
        wx.showToast({
          title: '贴图失败，请重试',
        })
      }
    })

    var markers = []
    for (const i of this.data.allMarkers) {
      if (i.type == "校门") {
        markers.push(i)
      }
    }
    this.setData({
      curMarkers: markers
    })

  },
  tabSelect(e) {
    var id = e.currentTarget.dataset.id
    var curType = this.data.allTypes[id]
    console.log('tabSelect', id, curType)
    this.setData({
      TabCur: id,
      scrollLeft: (id - 1) * 60
    })

    //切换curMarkers
    var markers = []
    for (const i of this.data.allMarkers) {
      if (i.type == curType) {
        markers.push(i)
      }
    }
    this.setData({
      curMarkers: markers
    })
    if (markers.length == 1) { //只有一个地点
      this.setData({
        scale: 14
      })
    } else {
      this.data.mapCtx.includePoints({
        padding: [40, 40, 40, 40],
        points: markers
      })
    }

    //交通
    if (curType == '交通') { //画线
      this.setData({
        curPolylines: this.data.busPolylines
      })
    } else {
      this.setData({
        curPolylines: []
      })
    }
  },

  barSelect(e) {
    var id = e.currentTarget.dataset.id
    console.log('barSelect', id)
    var that = this
    if (id == 0) { //定位
      this.setData({
        bar0: !this.data.bar0
      })
      if (!this.data.bar0) { //定位到学校
        wx.showToast({
          title: '定位到学校',
          icon: 'none'
        })
        this.data.mapCtx.moveToLocation({
          latitude: 35.772700,
          longitude: 120.028608,
          success() {
            console.log('moveTolocation')
            //缩放地图
            that.setData({
              scale: 14
            })
          },
          fail(err) {
            console.log('moveTolocation fail ', err)
            wx.showToast({
              title: '定位失败，请确保已授权定位',
              icon: 'none'
            })
          }
        });
      } else { //定位到自身
        wx.showToast({
          title: '定位到自身',
          icon: 'none'
        })
        this.data.mapCtx.moveToLocation({
          fail(err) {
            console.log('moveTolocation fail ', err)
            wx.showToast({
              title: '定位失败，请确保已授权定位',
              icon: 'none'
            })
          }
        });
      }
    } else if (id == 1) { //显示
      this.setData({
        bar1: !this.data.bar1
      })
      if (!this.data.bar1) { //隐藏文字
        wx.showToast({
          title: '点击显示',
          icon: 'none'
        })
        for (const i of this.data.allMarkers) {
          i.callout.display = 'BYCLICK'
        }
        //刷新当前标记点 curMarkers
        for (const i of this.data.curMarkers) {
          i.callout.display = 'BYCLICK'
        }
        this.setData({
          curMarkers: this.data.curMarkers
        })
      } else { //显示文字
        wx.showToast({
          title: '文字常显',
          icon: 'none'
        })
        for (const i of this.data.allMarkers) {
          i.callout.display = 'ALWAYS'
        }
        //刷新当前标记点 curMarkers
        for (const i of this.data.curMarkers) {
          i.callout.display = 'ALWAYS'
        }
        this.setData({
          curMarkers: this.data.curMarkers
        })
      }
    } else if (id == 2) { //搜索
      this.setData({
        bar2: !this.data.bar2
      })
      if (this.data.bar2) {
        animation.translateY(0).step()
        console.log('0')
      } else {
        animation.translateY(500).step()
        console.log('500')
      }
      this.setData({
        sideAni: animation.export(),
      })
    } else if (id == 3) { //留言板
      wx.navigateTo({
        url: '/pages/notice/notice',
      })
      this.setData({
        noticesRead: this.data.noticesCount
      })

    } else if (id == 4) { //关于
      this.setData({
        modalName: 'leftModal'
      })
    }
  },

  hideModal() {
    this.setData({
      modalName: ''
    })
  },

  bindInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  search() {
    console.log('search', this.data.inputValue)
    wx.showLoading({
      title: '搜索中',
    })
    var res = []
    for (const i of this.data.allMarkers) {
      if (i.type.indexOf(this.data.inputValue) != -1 || i.callout.content.indexOf(this.data.inputValue) != -1 || i.desc.indexOf(this.data.inputValue) != -1 || i.comment.indexOf(this.data.inputValue) != -1) {
        res.push(i)
      }
    }
    //console.log('searchallMarkers', res)
    //关联 通知Word
    for (const i of this.data.allWords) {
      if (i.title.indexOf(this.data.inputValue) != -1 || i.content.indexOf(this.data.inputValue) != -1 || i.keywords.indexOf(this.data.inputValue) != -1) {
        //地点id
        //console.log('地点id', i)
        for (const id of i.markerId)
          res.push(this.data.allMarkers[id])
      }
    }
    //console.log('searchallWords', res)

    res = this.delObj(res)

    console.log(res)
    wx.hideLoading()
    if (res.length == 0) {
      wx.showToast({
        title: '无搜索结果',
        icon: 'none'
      })
    } else {
      this.setData({
        curMarkers: res
      })
      if (res.length == 1) { //只有一个地点
        this.setData({
          scale: 14
        })
      } else {
        this.data.mapCtx.includePoints({
          padding: [40, 40, 40, 40],
          points: res
        })
      }

    }
  },
  mapSelect(e) {
    console.log('mapSelect', e.detail.markerId)
    wx.navigateTo({
      url: '/pages/info/info?markerId=' + e.detail.markerId,
    })
  },
  wd() {
    wx.navigateTo({
      url: '/pages/word/word',
    })
  },
/* 关于侧边栏，点击跳转 */
  jump(event) {
    let id = event.currentTarget.dataset.id;
    /*if (id == 0) {
      if (this.data.curPolylines != this.data.allPolylines) {
        this.setData({
          curPolylines: this.data.allPolylines,
          modalName: ''
        })
        wx.showToast({
          title: '显示道路',
          icon:'none'
        })
      } else {
        this.setData({
          curPolylines: [],
          modalName: ''
        })
        wx.showToast({
          title: '隐藏道路',
          icon:'none'
        })
      }
      return
    }*/
    // 获取到跳转锚点id
    wx.navigateTo({
      url: '/pages/word/word?id=' + id, // 通过url传到跳转页面
    })
  },

  delObj(obj) {
    var uniques = [];
    var stringify = {};
    for (var i = 0; i < obj.length; i++) {
      var keys = Object.keys(obj[i]);
      keys.sort(function (a, b) {
        return (Number(a) - Number(b));
      });
      var str = '';
      for (var j = 0; j < keys.length; j++) {
        str += JSON.stringify(keys[j]);
        str += JSON.stringify(obj[i][keys[j]]);
      }
      if (!stringify.hasOwnProperty(str)) {
        uniques.push(obj[i]);
        stringify[str] = true;
      }
    }
    uniques = uniques;
    return uniques;
  },
})