var webpack = require('webpack'),
       path = require('path');

module.exports = {
    context: __dirname + '/app',
    resolve: {
        alias: {
            jquery: "./jquery-1.11.3.min.js"
        }
    },
    entry: {
        app: './app.js',
        vendor: ['angular']
    },
    output: {
        path: __dirname + '/public/scripts',
        filename: 'todo.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ]
};
