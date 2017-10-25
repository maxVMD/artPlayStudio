"use strict"

var webpack = require("webpack");

module.exports = {


	entry: {
        system: "./system"

    },

    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },

    watch: true,

    watchOptions: {
    	aggregateTimeout: 100
    },

    devtool: 'source-map',


    module: {

        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
          }]
        
    }
 

   
}

