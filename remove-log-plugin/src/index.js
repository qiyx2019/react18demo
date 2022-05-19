class RemoveConsolePlugin {
  constructor(options) {
    let include = options&&options.include;
    let removed = ['log']; 
    if(include) {
      if(!Array.isArray(include)){
        console.error('options.include must be an Array.')
      } else if(include.includes('*')){
        removed = Object.keys(console).filter(fn => {
          return typeof console[fn] === 'function';
        })
      } else {
        removed = include;
      }
    }
    this.removed = removed;
  }
  apply(compiler) {
    let assetsHandler = (assets, compilation) => {
      let removedStr = this.removed.reduce((a, b) => (a + '|' + b));

      let reDict = {
        1: [RegExp(`\\.console\\.(${removedStr})\\(\\)`, 'g'), ''],
        2: [RegExp(`\\.console\\.(${removedStr})\\(`, 'g'), ';('],
        3: [RegExp(`console\\.(${removedStr})\\(\\)`, 'g'), ''],
        4: [RegExp(`console\\.(${removedStr})\\(`, 'g'), '(']
      }

      Object.entries(assets).forEach(([filename, source]) => {
        // 匹配js文件
        if (/\.js$/.test(filename)) {
          // 处理前文件内容
          let outputContent = source.source();

          Object.keys(reDict).forEach(i => {
            let [re, s] = reDict[i];
            outputContent = outputContent.replace(re, s);
          })

          compilation.assets[filename] = {
            // 返回文件内容
            source: () => {
              return outputContent
            },
            // 返回文件大小
            size: () => {
              return Buffer.byteLength(outputContent, 'utf8')
            }
          }
        }
      })
    }
    /**
     * 通过 compiler.hooks.compilation.tap 监听事件
     * 在回调方法中获取到 compilation 对象
     */
     compiler.hooks.compilation.tap('RemoveConsoleWebpackPlugin',
     compilation => {
       // Webpack 5
       if (compilation.hooks.processAssets) {
         compilation.hooks.processAssets.tap(
           { name: 'RemoveConsoleWebpackPlugin' },
           assets => assetsHandler(assets, compilation)
         );
       } else if (compilation.hooks.optimizeAssets) {
         // Webpack 4
         compilation.hooks.optimizeAssets.tap(
           'RemoveConsoleWebpackPlugin', 
           assets => assetsHandler(assets, compilation)
         );
       }
     })
  }
}

module.exports = RemoveConsolePlugin;