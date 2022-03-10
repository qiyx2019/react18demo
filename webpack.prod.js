const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require("path")
module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      // `...`,
      new CssMinimizerPlugin(),
    ],
    runtimeChunk: {
      name: (entrypoint) => `runtimechunk~${entrypoint.name}`,//创建一个在所有生成 chunk 之间共享的运行时文件
    },
    usedExports: 'global',//选择退出每次运行时使用 export 分享：
    chunkIds: 'named',//
    removeEmptyChunks: true, //如果 chunk 为空，告知 webpack 检测或移除这些 chunk
    splitChunks: {
        chunks: 'all',// async 异步(import()语法) initial(同步import xxx from 'xxx') all(所有)
        minChunks: 1,
        maxSize:30720,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        automaticNameDelimiter: '.ad.chunk.',
        name: function (module, chunks, cacheGroupKey){
            return cacheGroupKey;
        },
        cacheGroups: {
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10
            },
            react: {
                test: /[\\/]node_modules[\\/](react|react-dom)/,
                priority: -7
            },
            default: {
                minChunks: 1,
                priority: -20,
                reuseExistingChunk: true //复用
            }
        }
    }
},
  plugins:[
    // new BundleAnalyzerPlugin({
    //   //  可以是`server`，`static`或`disabled`。
    //   //  在`server`模式下，分析器将启动HTTP服务器来显示软件包报告。
    //   //  在“静态”模式下，会生成带有报告的单个HTML文件。
    //   //  在`disabled`模式下，你可以使用这个插件来将`generateStatsFile`设置为`true`来生成Webpack Stats JSON文件。
    //   analyzerMode: 'server',
    //   //  将在“服务器”模式下使用的主机启动HTTP服务器。
    //   analyzerHost: '127.0.0.1',
    //   //  将在“服务器”模式下使用的端口启动HTTP服务器。
    //   analyzerPort: 8888,
    //   //  路径捆绑，将在`static`模式下生成的报告文件。
    //   //  相对于捆绑输出目录。
    //   reportFilename: 'report.html',
    //   //  模块大小默认显示在报告中。
    //   //  应该是`stat`，`parsed`或者`gzip`中的一个。
    //   //  有关更多信息，请参见“定义”一节。
    //   defaultSizes: 'parsed',
    //   //  在默认浏览器中自动打开报告
    //   openAnalyzer: true,
    //   //  如果为true，则Webpack Stats JSON文件将在bundle输出目录中生成
    //   generateStatsFile: false,
    //   //  如果`generateStatsFile`为`true`，将会生成Webpack Stats JSON文件的名字。
    //   //  相对于捆绑输出目录。
    //   statsFilename: 'stats.json',
    //   //  stats.toJson（）方法的选项。
    //   //  例如，您可以使用`source：false`选项排除统计文件中模块的来源。
    //   //  在这里查看更多选项：https：  //github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
    //   statsOptions: null,
    //   logLevel: 'info' // 日志级别。可以是'信息'，'警告'，'错误'或'沉默'。
    // }),
  //   new CopyPlugin({patterns:[{
  //     from:'public/md',
  //     to:"md"
  //     //to:"[name][ext]", 
  //   },{
  //     from:'public/data',
  //     to:'data'
  //   },{
  //     from:'public/icon-font',
  //     to:'icon-font'
  //   }
  // ]}),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' })
  ],
  performance: {
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.js');
    },
  },
   
})
