const path = require('path')

module.exports = {
    entry: ['@babel/polyfill', path.resolve(__dirname,'./src/appName.js')],
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.js.map'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './public'),
        port: 3001
    },
    devtool: 'source-map'
}

