var path    = require('path')
var webpack = require('webpack')

module.exports = {
    context: path.join(__dirname, 'app'),
    entry: [
        'webpack-dev-server/client?http://localhost:3333',
        'webpack/hot/dev-server',
        './main.js'
    ],
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/,
            include: __dirname
        }, {
            test: /\.css?$/,
            loaders: ['style', 'raw'],
            include: __dirname
        }]
    }
}
