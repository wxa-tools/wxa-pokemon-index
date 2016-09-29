Page({
  data: {
    title: 'Pokémon Index',
    hidden: false,
    pokemons: [],
    next: null
  },
  onLoad: function () {
    this.fetchData()
  },
  fetchData: function () {
    var that = this
    var url = that.data.next || 'https://pokeapi.co/api/v2/pokemon/'
    that.setData({
      hidden: false
    })
    wx.request({
      url: url,
      success: function(res) {
        that.setData({
          pokemons: that.data.pokemons.concat(res.data.results),
          hidden: true,
          next: res.data.next
        })
      }
    })
  },
  pokemonDetail: function (e) {
    var id = e.currentTarget.id
    var url = '../pokemon/pokemon?id=' + id;
    wx.navigateTo({
      url: url
    })
  },
  onHitBottom: function (e) {
    this.fetchData()
  }
})
