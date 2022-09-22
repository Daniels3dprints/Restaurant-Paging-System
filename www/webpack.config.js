module.exports = {
    entry: {
      index: './src/index.js',
      readConfig: './src/readConfig.js',
      pagerController: './src/pagerController.js',
      pagerTest: './src/pagerTest.js',
      restartServer: './src/restartServer.js'
    },
    output: {
      filename: '[name].js',
      path: __dirname + '/dist',
    },
  };