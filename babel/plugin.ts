const pathUtil = require('path');
const fs = require('fs');
const template = require('@babel/template').default;
const t = require("@babel/types");

// 将脊柱命名转为下划线命名
const transName = (name) => `plugin${name.replace(/-/g, '_')}`;

// 开启的业务插件列表
const plugins = fs.readdirSync(pathUtil.resolve(__dirname, '../src/biz-plugins')).filter(name => name.startsWith('front'));

const PRE_PLUGIN = '@/plugin';
const PLUGIN_DIR = 'src/biz-plugins';

// 导入语句模板
const importTpl = template(`import %%name%% from %%fromName%%;`);
// 空语句模板
const emptyTpl = template(`const %%name%% = {}`);
// mergePlugins语句模板
const mergePlugins = require('@babel/parser').parse(`
import mergePlugins from '@/utils/merge-plugins';
const plugin = mergePlugins(${plugins.map(name => transName(name)).reduce((a, b) => a + ',' + b, '').substr(1)});
`, { sourceType: "module" }).program.body;

/**
 * 代码插件化babel插件
 */
module.exports = function () {
  return {
    visitor: {
      ImportDeclaration(path, state) {
        const node = path.node;
        const value = node.source.value;
        if (value === PRE_PLUGIN) {
          // 当业务代码中出现@/plugin，将其替换
          try {
            const importNodes = plugins.map(pluginName => {
              const filePath = state.filename.replace(state.cwd, '');
              const pluginFilePath = pathUtil.join(__dirname, '..', PLUGIN_DIR, pluginName, filePath);
              if (fs.existsSync(pluginFilePath)) {
                // 如果插件中存在对应文件，返回指向文件的import语句
                return importTpl({
                  name: t.identifier(transName(pluginName)),
                  fromName: t.stringLiteral(`${PRE_PLUGIN}/${pluginName}${filePath}`)
                })
              } else {
                // 插件中不存在对应文件，返回空行
                return emptyTpl({ name: t.identifier(transName(pluginName)) });
              }
            });
            path.replaceWithMultiple([...importNodes, ...mergePlugins]);
          } catch (e) {
            console.log('插件化编译报错', e);
            throw e;
          }
        }
      }
    }
  }
}