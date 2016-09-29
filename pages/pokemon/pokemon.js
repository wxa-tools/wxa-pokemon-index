Page({
  data: {
    hidden: false,
    pokemon: {}
  },
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://pokeapi.co/api/v2/pokemon/' + options.id,
      success: function (res) {
        console.log('res', res)
        that.setData({
          pokemon: res.data,
          hidden: true
        })
      }
    })
  }
})
