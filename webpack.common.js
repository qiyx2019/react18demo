const path = require('path');
const webpack=require("webpack");
const HWP = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HelloWorldPlugin = require('./src/webpack/demo1.ts');

const ASSET_PATH = '/';
 
module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx','.js'],
    alias: {
      '@' : path.resolve(__dirname, './src/')
    },
    // modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  entry: ["./src/index.tsx"],
  plugins: [
    new HelloWorldPlugin({ options: true }),
    new HWP({
      title: "Production",
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
                       // 提取出来的css文件路径以及命名
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,       //一个正则表达式，指示应优化/最小化的资产的名称。提供的正则表达式针对配置中ExtractTextPlugin实例导出的文件的文件名运行，而不是源CSS文件的文件名。默认为/\.css$/g
      cssProcessor: require('cssnano'), //用于优化\最小化CSS的CSS处理器，默认为cssnano
      cssProcessorOptions: { safe: true, discardComments: { removeAll: true } }, //传递给cssProcessor的选项，默认为{}
      canPrint: true                    //一个布尔值，指示插件是否可以将消息打印到控制台，默认为true
    }),
    new CompressionPlugin({   //打包的时候开启gzip可以很大程度减少包的大小，非常适合于上线部署。更小的体积对于用户体验来说就意味着更快的加载速度以及更好的用户体验
      test: /\.js(\?.*)?$/i,
      algorithm: 'gzip',
    }),
     
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.DefinePlugin({
      "process.env.ASSET_PATH":JSON.stringify(ASSET_PATH)
    }),
     
    
  ],
  output: {
    filename: process.env.NODE_ENV !== 'production' ? '[name].bundle.js' : '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    // libraryTarget: 'umd',
    assetModuleFilename: 'images/[hash][ext][query]',
    // publicPath:process.env.NODE_ENV !== 'production' ?"/":"/wiki"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'] ,
        exclude: /node_modules/
      }, {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            }
          },
        ],
       type: 'javascript/auto'
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: 'asset/resource',
        exclude: /node_modules/
      }, {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
        exclude: /node_modules/
      }, {
        test: /\.xml$/i,
        use: ['xml-loader'],
        exclude: /node_modules/
      }, // 'transform-runtime' 插件告诉 Babel
      // 要引用 runtime 来代替注入。
      {
        test: /(\.jsx|\.js|\.ts|\.tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'
          ]
          }
        },
      }

    ]
  },
   
   
  performance: { //防止分析时导致打包的时候内存溢出
    hints: false
  }
}



// "cross-env NODE_ENV=production npm_config_report=true npm run build"