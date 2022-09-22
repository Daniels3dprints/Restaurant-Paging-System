module.exports = {
    entry: {
      index: './src/index.js',
      readConfig: './src/readConfig.js',
    },
    output: {
      filename: '[name].js',
      path: __dirname + '/dist',
    },
  };