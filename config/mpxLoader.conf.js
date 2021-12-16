// mpx的loader配置在这里传入
// 配置项文档：https://www.mpxjs.cn/api/compile.html#mpxwebpackplugin-loader

const MpxWebpackPlugin = require('@mpxjs/webpack-plugin')

module.exports = {
    module: {
        rules: [
          {
            test: /\.mpx$/,
            use: MpxWebpackPlugin.loader({
              loaders: {
                scss: [
                  { loader: 'css-loader' },
                  { loader: 'sass-loader' }
                ]
              }
            })
          }
        ]
      },
}
