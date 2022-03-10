const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const path = require('path')
module.exports=merge(common,{
  mode:'development',
  devtool:'inline-source-map',
  devServer:{
     static:"public",
      hot:true,
      // proxy:{  
      //     '/': {
      //       target: 'http://localhost:3000',
      //       changeOrigin: true,
      //     }
      // }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' })
  ],
  cache:{
    type: 'memory',
    cacheUnaffected: true,
  }
})