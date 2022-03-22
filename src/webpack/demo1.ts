class HelloWorldPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('Hello World Plugin', (
      stats /* 在 hook 被触及时，会将 stats 作为参数传入。 */
    ) => {
      console.log('Hello World1!');
    });
  }
}

module.exports = HelloWorldPlugin;



 