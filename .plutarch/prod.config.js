module.exports = {
  output: {
    library: 'tac-router',
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDom',
  },
  compress: false,
  devtool: false
};