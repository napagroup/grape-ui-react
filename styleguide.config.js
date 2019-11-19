module.exports = {
  components: 'src/elements/**/styled.js',
  // sections: [
  //   {
  //     content: 'docs/introduction.md',
  //     name: '🍇UI',
  //   },
  // ],
  skipComponentsWithoutExample: true,
  title: '🍇UI Style Guide',
  webpackConfig: require('./src/internals/webpack/webpack.config.js'), // eslint-disable-line global-require
};
