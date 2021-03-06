const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = {
  presets: [
    [
      'env',
      {
        useBuiltIns: 'usage',
        targets: {
          uglify: true,
          node: 'current',
        },
        loose: true,
        modules: isTest ? 'commonjs' : false,
        debug: !isTest,
      },
    ],
    'react',
  ],
  retainLines: true,
  plugins: [
    [
      'transform-runtime',
      {
        corejs: {
          version: 3,
          proposals: true,
        },
      },
    ],
    'transform-class-properties',
    'transform-object-rest-spread',
    'syntax-dynamic-import',
    [
      'import',
      {
        libraryName: '@material-ui/core',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      '@material-ui/core',
    ],
    [
      'import',
      {
        libraryName: '@material-ui/core/styles',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      '@material-ui/core/styles',
    ],
    [
      'import',
      {
        libraryName: '@material-ui/core/colors',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      '@material-ui/core/colors',
    ],
    [
      'import',
      {
        libraryName: '@material-ui/core/icons',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      '@material-ui/core/icons',
    ],
  ],
  env: {
    development: {
      plugins: ['react-hot-loader/babel'],
    },
    test: {
      plugins: ['dynamic-import-node'],
    },
  },
};
