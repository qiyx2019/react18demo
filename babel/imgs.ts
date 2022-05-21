const parse = require('@babel/parser').parse;
const t = require('@babel/types');

// 微信小程序打包
const weappProdFlag = process.env.TARO_ENV === 'weapp' && process.env.NODE_ENV == 'production';

let uiOssHost = process.env.OSS_HOST.replace('/mini', '/pandora-ui');
if (uiOssHost[uiOssHost.length - 1] !== '/') uiOssHost += '/';

/**
 * 替换图片路径插件
 */
module.exports = function() {
  return {
    visitor: {
      // 1.在微信小程序打包情况下，修改图片地址为oss地址
      ImportDeclaration(path) {
        if (weappProdFlag) {
          try {
            const node = path.node;
            const value = node.source.value;
            if (value.startsWith('@/assets/image') && !value.startsWith('@/assets/image/tab/')) {
              const name = node.specifiers[0].local.name;
              const url = node.source.value.replace('@/assets/image', `${process.env.OSS_HOST}/assets/image`);
              // fixme https://babeljs.io/docs/en/babel-template 使用template
              const newNode = parse(`const ${name} = '${url}';`).program.body[0];
              path.replaceWith(newNode);
            }
          } catch (e) {
            console.error('import方式图片url替换失败');
          }
        }
      },
      CallExpression(path) {
        if (weappProdFlag) {
          try {
            const node = path.node;
            if (node.callee.type === 'Identifier'
              && node.callee.name === 'require') {
              const value = node.arguments[0].value;
              if (value.startsWith('@/assets/image') && !value.startsWith('@/assets/image/tab/')) {
                path.replaceWith(
                  t.stringLiteral(value.replace('@/assets/image', `${process.env.OSS_HOST}/assets/image`))
                );
              }
            }
          } catch (e) {
            console.error('require形式图片url替换失败');
          }
        }
      },
      // 2.替换oss地址
      Literal(path) {
        const node = path.node;
        try {
          if (node.value && node.value.startsWith
            && node.value.startsWith('https://xxx.oss-cn-shanghai.aliyuncs.com/pandora-ui/')) {
            node.value = node.value.replace('https://xxx.oss-cn-shanghai.aliyuncs.com/pandora-ui/', uiOssHost);
          }
        } catch (e) {
          throw e;
        }
      },
    }
  };
}