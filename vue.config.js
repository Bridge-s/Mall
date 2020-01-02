module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
        'common': '@/common'
      }
    }
  }
}
