class MyWebpackPlugin {
  apply(compiler) {
    compiler.plugin('emit', (compilation, callback) => {
      const source = compilation.assets['main.js'].source();

      compilation.assets['main.js'].source = () => {
        const banner = [
          '/**',
          ' * Build Date: yyyy-MM-dd',
          ' */'
        ].join('\n');

        return banner + '\n\n' + source;
      };

      callback();
    });

    compiler.hooks.done.tap('My Plugin', (stats) => {
      console.log('MyPlugin: done');
    })
  }
}

module.exports = MyWebpackPlugin;