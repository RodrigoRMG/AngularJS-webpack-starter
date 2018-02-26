var webpack = require('webpack');

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './app.js',
        vendor: ['angular','@uirouter/angularjs','oclazyload','angular-local-storage','angular-sanitize']  
    },
    output: {
        path: __dirname + '/js',
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ]
};