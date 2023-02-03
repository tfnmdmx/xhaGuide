var Polylines_example = [{
  points: [{
    latitude: 35.777138,
    longitude: 120.032238,
  }, {
    latitude: 35.776951,
    longitude: 120.032490,
  }],
  color: '#7B68EE', //线的颜色
  // colorList: [], //彩虹线,存在时忽略 color 值
  width: 15, //线的宽度,Number,否则多个线条时会报错 MultiPolyline.styles: 样式id  line_0  对应的PolylineStyle.width属性无效 
  dottedLine: true, //是否虚线
  arrowLine: true, //带箭头的线
  arrowIconPath: '../images/qz.png', //更换箭头图标	 //貌似不显
  borderColor: '#483D8B', //线的边框颜色  //手机上 貌似不显
  borderWidth: '10px', //边框线的厚度，Number
  level: 'abovelabels', //压盖关系 abovelabels 显示在所有 POI 之上 abovebuildings 显示在楼块之上 POI 之下 aboveroads 显示在道路之上楼块之下
  textStyle: [{ //貌似不显
    textColor: '#708090', //文本颜色
    strokeColor: '#ffffff', //描边颜色
    fontSize: '14', //文本大小
  }], //文字样式
  segmentTexts: [{ //貌似不显
    name: 'sss',
    startIndex: 0,
    endIndex: 1,
  }], //分段文本
}]

/* 
 所有道路   《==
*/
var allPolylines = [{
  points: [{
    latitude: 35.776951,
    longitude: 120.022884,
  }, {
    latitude: 35.776391,
    longitude: 120.022884,
  }, {
    latitude: 35.776391,
    longitude: 120.024148,
  }, {
    latitude: 35.776765,
    longitude: 120.024148,
  }],
}, {
  points: [{
    latitude: 35.776391,
    longitude: 120.024148,
  }, {
    latitude: 35.776391,
    longitude: 120.024654,
  }, {
    latitude: 35.775644,
    longitude: 120.024401,
  }],
}, {
  points: [{
    latitude: 35.776391,
    longitude: 120.024654,
  }, {
    latitude: 35.776391,
    longitude: 120.026170,
  }, {
    latitude: 35.778072,
    longitude: 120.026170,
  }, {
    latitude: 35.778072,
    longitude: 120.029710,
  }, {
    latitude: 35.778632,
    longitude: 120.029962,
  }, {
    latitude: 35.778632,
    longitude: 120.028446,
  }],
}, {
  points: [{
    latitude: 35.776391,
    longitude: 120.024654,
  }, {
    latitude: 35.776391,
    longitude: 120.037294,
  }, {
    latitude: 35.779379,
    longitude: 120.039063,
  }, {
    latitude: 35.779379,
    longitude: 120.035524,
  }, {
    latitude: 35.779379,
    longitude: 120.030468,
  }, {
    latitude: 35.771722,
    longitude: 120.028446,
  }],
}, {
  points: [{
    latitude: 35.776204,
    longitude: 120.027434,
  }, {
    latitude: 35.775457,
    longitude: 120.027434,
  }, {
    latitude: 35.775271,
    longitude: 120.028446,
  }, {
    latitude: 35.774710,
    longitude: 120.028446,
  }, ],
}, {
  points: [{
    latitude: 35.776391,
    longitude: 120.035018,
  }, {
    latitude: 35.773029,
    longitude: 120.034260,
  }, {
    latitude: 35.773216,
    longitude: 120.032996,
  }, {
    latitude: 35.772469,
    longitude: 120.032996,
  }, {
    latitude: 35.772469,
    longitude: 120.031226,
  }, {
    latitude: 35.771722,
    longitude: 120.031226,
  }, {
    latitude: 35.772096,
    longitude: 120.029204,
  }, {
    latitude: 35.772469,
    longitude: 120.029457,
  }, {
    latitude: 35.773029,
    longitude: 120.029457,
  }, {
    latitude: 35.773403,
    longitude: 120.029710,
  }, {
    latitude: 35.773776,
    longitude: 120.029710,
  }, {
    latitude: 35.774337,
    longitude: 120.029962,
  }, {
    latitude: 35.774897,
    longitude: 120.029710,
  }, ],
}, {
  points: [{
    latitude: 35.776391,
    longitude: 120.031479,
  }, {
    latitude: 35.775644,
    longitude: 120.031479,
  }, {
    latitude: 35.774524,
    longitude: 120.031732,
  }, {
    latitude: 35.774150,
    longitude: 120.031479,
  }, {
    latitude: 35.774150,
    longitude: 120.030468,
  }, {
    latitude: 35.773776,
    longitude: 120.029962,
  }, {
    latitude: 35.773776,
    longitude: 120.029710,
  }, ],
}, {
  points: [{
    latitude: 35.774524,
    longitude: 120.031732,
  }, {
    latitude: 35.774524,
    longitude: 120.033249,
  }, {
    latitude: 35.773963,
    longitude: 120.033249,
  }, {
    latitude: 35.773590,
    longitude: 120.034260,
  }, ],
}, {
  points: [{
    latitude: 35.772656,
    longitude: 120.031226,
  }, {
    latitude: 35.773029,
    longitude: 120.031226,
  }, {
    latitude: 35.773216,
    longitude: 120.029710,
  }, ],
}, {
  points: [{
    latitude: 35.773029,
    longitude: 120.031226,
  }, {
    latitude: 35.774150,
    longitude: 120.031479,
  }, ],
}, ]

var allPolylines_sameSetting = {
  color: '#00A0E9', //天蓝
  width: 5, //线的宽度
}
for (const i of allPolylines) {
  i = Object.assign(i, allPolylines_sameSetting);
}
//console.log(allPolylines)
/* 
导航路线  《==
*/
var guidePolylines = [{
  points: [{
    latitude: 35.777138,
    longitude: 120.032238,
  }, {
    latitude: 35.776951,
    longitude: 120.032490,
  }],
}, {
  points: [{
    latitude: 35.776204,
    longitude: 120.037041,
  }, {
    latitude: 35.776204,
    longitude: 120.029457,
  }],
}, ]

var guidePolylines_sameSetting = {
  color: '#C8150A', //海大红
  width: 5, //线的宽度
  arrowLine: true, //带箭头的线
}
for (const i of guidePolylines) {
  i = Object.assign(i, guidePolylines_sameSetting);
}
/* 
 小公交路线 《==
*/
var busPolylines = [{
  points: [{
    latitude: 35.776391, //0
    longitude: 120.022884,
  }, {
    latitude: 35.776391, //1
    longitude: 120.025159,
  }, {
    latitude: 35.776391, //2
    longitude: 120.028698,
  }, {
    latitude: 35.776391, //3
    longitude: 120.031226,
  }, {
    latitude: 35.774337, //4
    longitude: 120.031479,
  }, {
    latitude: 35.774150, //4.1
    longitude: 120.030468,
  }, {
    latitude: 35.773590, //4.2
    longitude: 120.029457,
  }, {
    latitude: 35.773403, //5
    longitude: 120.029457,
  }, {
    latitude: 35.773029, //5.1
    longitude: 120.031226,
  }, {
    latitude: 35.772469, //5.2
    longitude: 120.030974,
  }, {
    latitude: 35.772282, //6
    longitude: 120.031732,
  }, {
    latitude: 35.772282, //6.1
    longitude: 120.032743,
  }, {
    latitude: 35.772843, //6.2
    longitude: 120.032996,
  }, {
    latitude: 35.772656, //6.3
    longitude: 120.034260,
  }, {
    latitude: 35.773216, //7
    longitude: 120.034260,
  }, {
    latitude: 35.777138, //8
    longitude: 120.034766,
  }, ],
  width: 5, //线的宽度
  colorList: ['#004098', '#00A0E9', '#C8150A', '#F9D2D4', '#794F2F', '#794F2F', '#794F2F', '#CCAD69', '#CCAD69', '#CCAD69', '#CFD0D0', '#CFD0D0', '#CFD0D0', '#CFD0D0', '#00A0E9'], //彩虹线,存在时忽略 color 值
}, ]

// var busPolylines_sameSetting = { 只画了一条线，所以不用遍历赋值
//   color: '#004098', //海蓝
//   width: 5, //线的宽度
//   arrowLine: true, //带箭头的线
// }
// for (const i of busPolylines) {
//   i = Object.assign(i, busPolylines_sameSetting);
// }

module.exports = {
  allPolylines: allPolylines, //所有道路 - 天蓝 - 多条线，同时显示
  guidePolylines: guidePolylines, //导航路线 - 红 - 多条线，不同时显示
  busPolylines: busPolylines, //公交路线 - 海蓝 - 多条线段，彩虹线
}