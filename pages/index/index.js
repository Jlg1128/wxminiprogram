Page({


clchange(e){
  this.setData({
    currentindex:e.target.dataset.index
  })
},
  data: {
    VideosList:[{
      id:1,
      path: "../detail/detail",
      Imgsrc:"/images/post/bl.png",
      Iconssrc:"/icons/check.png",
      times:12312,
      counts:3133,
      Text:"你好啊水电费阿双方都是发撒的阿斯顿发送到发送到"
    },{
        path: "../detail1/detail1",
        id:2,
        Imgsrc: "/images/post/cat.png",
        Iconssrc: "/icons/search.png",
        times: 134432,
        counts: 3213,
        Text: "你好啊水电费阿双方都是发撒的阿斯顿发送到发送到"
    },{
        path: "../detail2/detail2",
        id:3,
        Imgsrc: "/images/post/vr.png",
        Iconssrc: "/icons/view1.png",
        times: 4642,
        counts: 6188,
        Text: "你好啊水电费阿双方都是发撒的阿斯顿发送到发送到"
    },{
        path: "../detail3/detail3",
        id:4,
        Imgsrc: "/images/post/crab.png",
        Iconssrc: "/icons/view_off.png",
        times: 12342,
        counts: 8646,
        Text: "你好啊水电费阿双方都是发撒的阿斯顿发送到发送到"
    }],
 array:[
   "首页","动画","番剧","纪录片","电影","鬼畜","短视频","div"
   
 ],
 swiperList:[],
videosList:[],
  },
  getVideosList(){
    let that = this;
wx.request({
  url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
  success(res){
    if(that.data.code===0){
      that.setData({
        videosList:res.data.data.videosList,
      })
    }
  }
})
  },

 getSwiperList(){
   let that = this;
wx.request({
  url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
  success(res){
    if(res.data.code===0){
that.setData({
  swiperList:res.data.data.swiperList
})
    }
  }
})
 },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})