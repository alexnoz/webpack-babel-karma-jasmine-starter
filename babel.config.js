module.exports = api => {
  const plugins = [
    'babel-plugin-add-module-exports',
    'babel-plugin-transform-es2015-modules-umd'
  ];

  if (api.env() === 'karma')
    plugins.push(['istanbul', { include: ['**/src/**/*.js'] }]);

  return {
    plugins,
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          targets: {
            browsers: [
              '> 1%',
              'last 2 versions'
            ]
          }
        }
      ]
    ]
  };
};
