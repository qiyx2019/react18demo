const parse = require('@babel/parser').parse;
const t = require('@babel/types');
const template = require('@babel/template').default;
const path = require('path')
const importTpl = template(`import %%name%% from %%fromName%%;`)

const p = path.join(__dirname, '..', 'src', 'common', 'scrollview.tsx')

module.exports = function() {
  return {
    visitor: {
      ImportDeclaration(path, a) {
        const node = path.node;
        const value = node.source.value;
        const filename = a.file.opts.filename
        if (value === '@tarojs/components' && filename !== p) {
          const index = node.specifiers.findIndex(e => e.imported.name === 'ScrollView')
          if (index > -1) {
            node.specifiers.splice(index, 1)
            const imp2 = importTpl({
              name: t.identifier('ScrollView'),
              fromName: '@/common/scrollview'
            })
            path.insertBefore(imp2);
          }
        }
      }
    }
  }
}