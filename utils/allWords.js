var allWords = [/* {
    title: '查看道路',
    content: '纯手工画图，有点丑了，等考完研重画一下\n再次点击取消查看',
    imageList: [],
    keywords: [],
    markerId: [-1],
  }, */  {
    title: '西海岸导览',
    content: '因中国海洋大学西海岸校区刚刚建成投入使用，现有导航软件暂无该地区地图，故开发此小程序为同学们提供基础地图显示服务。\n\n因现有资料较少等原因，本程序可能会存在许多问题，请以实际情况为准。',
    imageList: ['https://img-blog.csdnimg.cn/658e11bfb0324e83b058405e73494863.jpeg'],
    keywords: [],
    markerId: [-1],
  }, {
    title: '上课时间表',
    content: '西海岸的上课时间有所变化',
    imageList: ['https://img-blog.csdnimg.cn/427e340cc52f4bce882ee42958c3874f.jpeg'],
    keywords: [],
    markerId: [-1],
  }, {
    title: '图书阅览室',
    content: '',
    imageList: ['https://img-blog.csdnimg.cn/2dacb073e89e44ffaf80883c63b1da99.png'],
    keywords: ['图书馆'],
    markerId: [6, 57],
  },/*  {
    title: '一期建设项目',
    content: '',
    imageList: ['https://img-blog.csdnimg.cn/c8507fa347954cf080cfe0c4fbce6b5e.jpeg'],
    keywords: [],
    markerId: [-1],
  }, {
    title: '道路示意图',
    content: '',
    imageList: ['https://img-blog.csdnimg.cn/35aad2308e6b4a808559c08b19811a7c.png'],
    keywords: ['可行可走可以走的路段'],
    markerId: [-1],
  },
  {
    title: '核酸',
    content: '29号开始，需先注册，生成条形码\n东区在学习综合体西广场，西区在学生宿舍园区内\n\n全员核酸检测\n周一（12：00-16：30）\n周四（9：00-11：30，12：30-16：00)',
    imageList: ['https://img-blog.csdnimg.cn/f750510d994e4acebeade73317cb01aa.png'],
    keywords: ['康鸿医护'],
    markerId: [40, 53],
  }, */
  {
    title: '快递',
    content: '营业时间：8：30—19：00 \n收发地址：\n东区：青岛市黄岛区古镇口核心区三沙路1299号中国海洋大学西海岸校区听海苑（东区）\n\n西区：青岛市黄岛区古镇口核心区三沙路1299号中国海洋大学西海岸校区望海苑（西区）\n\n以上两处菜鸟驿站均在学生宿舍生活区，位置醒目，如有疑问可拨打服务电话19506420249（微信同号）。',
    imageList: ['https://img-blog.csdnimg.cn/178026f23a634f38856ee6c0081280d0.png'],
    keywords: ['菜鸟驿站'],
    markerId: [9, 52],
  },
  {
    title: '综合管理服务大厅',
    content: '地址：学习综合体北楼2楼215室\n服务时间：周一至周五（法定节假日除外）\n上午8：30 - 11:30\n下午13：30 - 16:30\n每周四下午业务学习，不对外办公。\n大厅自助服务区域内设有校园卡一体机、自助表单打印机、网费缴纳机、商品自贩机。',
    imageList: ['https://img-blog.csdnimg.cn/f7897e5371e74bb7b032e8c202eb2d6b.png', 'https://img-blog.csdnimg.cn/ad1e56a63ded479bb438e2c917348fd7.png', 'https://img-blog.csdnimg.cn/085b031d89964262896433c03c64a0e4.png'],
    keywords: ['自助打印'],
    markerId: [6],
  },
  {
    title: '校园服务一号通系统',
    content: '电话：0532－60890000\n地点：学习综合体2楼综合管理服务大厅',
    imageList: [],
    keywords: ['投诉报修建议表扬维修反馈'],
    markerId: [6],
  },
  {
    title: '报警',
    content: '电话：0532－60892110\n地点：东区基建楼',
    imageList: ['https://img-blog.csdnimg.cn/e5dea012532f439ba58a6bc54e6ff0fa.png','https://img-blog.csdnimg.cn/33b581131a3f44548203a5ef6f2a71ea.jpeg'],
    keywords: ['保卫处保安'],
    markerId: [-1],
  },
  {
    title: '就医',
    content: '地点：东区基建楼\n门诊时间：上午8点到12点，下午1点到5点\n值班电话：60892120',
    imageList: ['https://img-blog.csdnimg.cn/85d673698dd04e9ca6ba236ace9d526c.png'],
    keywords: ['医院医生看病'],
    markerId: [-1],
  },
  {
    title: '门禁',
    content: '晚十点半，早六点',
    imageList: [],
    keywords: [],
    markerId: [9, 40],
  },
  {
    title: '宿舍供暖',
    content: '有地暖',
    imageList: ['https://img-blog.csdnimg.cn/8b261a9b67f24309b24150b3e2dc629f.png'],
    keywords: ['暖气'],
    markerId: [9, 40],
  },
  {
    title: '生活服务室',
    content: '每栋宿舍楼都配备有生活服务室，内设洗衣机、洗鞋机、烘干机等',
    imageList: [],
    keywords: ['洗衣服洗衣房'],
    markerId: [9, 40],
  },
  {
    title: '直饮水',
    content: '西海岸宿舍楼的一楼配备有免费开水机，各层另配备有1台刷卡直饮水机\n直饮水价格：0.24元/升，与崂山校区、鱼山校区一致',
    imageList: [],
    keywords: [],
    markerId: [9, 40],
  },
  {
    title: '空调租赁',
    content: '【海享租】微信公众号是唯一缴费通道，通过关注【海享租】微信公众号，点击菜单【在线租赁】—【租赁】选择对应的宿舍进行下单即可。付款成功后，在设备正常通电情况下，可直接使用【海享租】微信公众号底部菜单【在线租赁】-【空调图标】进行在线操控。如有实体遥控器使用需求，可到宿舍值班室找值班员领取。',
    imageList: [],
    keywords: [],
    markerId: [9, 40],
  },
/*   {
    title: '自动售货机',
    content: '宿舍楼大厅均配备有1台自动售货机，扫码支付即可购买商品。',
    imageList: [],
    keywords: [],
    markerId: [9, 40],
  }, */
  {
    title: '报修',
    content: '1.线上报修：\n①电话：拨打西海岸校区综合管理服务一号通电话：60890000\n②PC端：西海岸校区综合管理系统：https://wservice.ouc.edu.cn\n③移动端：关注微信公众号“OUC西海岸综合服务”，点击【服务大厅】，输入统一身份认证用户名和密码进入报修。\n\n2.线下报修：\n为保障同学们的安全，满足同学们的实际生活需求，学生宿舍已实行24小时值班，每栋宿舍楼都设有值班室，如有需求，同学们可到各宿舍楼值班室登记报修。',
    imageList: ['https://img-blog.csdnimg.cn/fc77d97e7b7d4087a4b7a2f5c2d52c42.png'],
    keywords: [],
    markerId: [9, 40],
  },
/*   {
    title: '水果',
    content: '望海餐厅三楼摆了水果摊\n附近村子集会也卖水果',
    imageList: [],
    keywords: [],
    markerId: [9, 55],
  }, */

]
var j = 0
for (const i of allWords) {
  i.id = j
  j = j + 1
}

module.exports = {
  allWords: allWords,
}