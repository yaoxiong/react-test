var path = require('path');
var webpack = require('webpack');
module.exports={
    module:{
        devtool: 'inline-source-map',
        loaders:[{
            test: /\.jsx?$/,
            loader: 'babel',
            query: {
              presets: ['es2015']
            },
            exclude:[
               path.resolve( __dirname, './test' ), path.resolve( __dirname, './node_modules' )
            ]
        }]
    }
};