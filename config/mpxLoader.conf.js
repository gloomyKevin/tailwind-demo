const MpxWebpackPlugin = require('@mpxjs/webpack-plugin')

module.exports = {
    module: {
        rules: [
            {
                test: /\.mpx$/,
                use: MpxWebpackPlugin.loader({
                    loaders: {
                        scss: [
                            { loader: 'sass-loader', options: { sassOptions: { outputStyle: 'nested' } } }
                        ]
                    }
                })
            }
        ]
    },
}
