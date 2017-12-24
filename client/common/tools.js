if (window.wx) {
  window.wx.config({
    jsApiList: [
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
    ],
  })
}

const initShareMenu = (title, desc) => {
  if (window.wx) {
    // 微信需要设置分享标题和链接

    window.wxReady.then(() => {
      let _data = {
        link: window.location.href,
        title,
        imgUrl: `${window.location.origin}/images/share-logo.png`,
      }

      window.wx.onMenuShareTimeline(_data)
      window.wx.onMenuShareAppMessage(Object.assign({}, _data, {
        desc,
      }))
    })
  }
}

export default {
  initShareMenu,
}
