var path = require('path');


module.exports = {
    entry: './src/index',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'r.js',
        publicPath: '/',
        library: 'R',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-class-properties']
                }
            }
        ]
    },
    devtool: 'eval'
};