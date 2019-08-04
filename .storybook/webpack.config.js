module.exports = ({config}) => {
  config.module.rules.shift();
  const jsloader = {
  "test": /\.(js|jsx|mjs)$/,
  "loader": [
    {
      "loader": "/Users/alfred/Desktop/dvp/plutarch/packages/plutarch/node_modules/babel-loader/lib/index.js",
      "options": {
        "babelrc": true,
        "presets": [
          [
            "/Users/alfred/Desktop/dvp/plutarch/packages/plutarch/node_modules/@babel/preset-env/lib/index.js",
            {
              "targets": {
                "browsers": [
                  "last 2 versions",
                  "IE >= 9"
                ]
              },
              "loose": false,
              "modules": false
            }
          ],
          "/Users/alfred/Desktop/dvp/plutarch/packages/plutarch/node_modules/@babel/preset-react/lib/index.js"
        ],
        "plugins": [
          [
            "/Users/alfred/Desktop/dvp/plutarch/packages/plutarch/node_modules/@babel/plugin-transform-runtime/lib/index.js",
            {
              "absoluteRuntime": "/Users/alfred/Desktop/dvp/plutarch/packages/plutarch/node_modules/webpackrc-cfg",
              "corejs": {
                "version": 2
              }
            }
          ],
          "/Users/alfred/Desktop/dvp/plutarch/packages/plutarch/node_modules/@babel/plugin-proposal-function-bind/lib/index.js",
          "/Users/alfred/Desktop/dvp/plutarch/packages/plutarch/node_modules/@babel/plugin-proposal-export-default-from/lib/index.js",
          "/Users/alfred/Desktop/dvp/plutarch/packages/plutarch/node_modules/@babel/plugin-proposal-logical-assignment-operators/lib/index.js",
          [
            "/Users/alfred/Desktop/dvp/plutarch/packages/plutarch/node_modules/@babel/plugin-proposal-pipeline-operator/lib/index.js",
            {
              "proposal": "minimal"
            }
          ],
          [
            "/Users/alfred/Desktop/dvp/plutarch/packages/plutarch/node_modules/@babel/plugin-proposal-nullish-coalescing-operator/lib/index.js",
            {
              "loose": false
            }
          ],
          "/Users/alfred/Desktop/dvp/plutarch/packages/plutarch/node_modules/@babel/plugin-proposal-do-expressions/lib/index.js",
          [
            "/Users/alfred/Desktop/dvp/plutarch/packages/plutarch/node_modules/@babel/plugin-proposal-decorators/lib/index.js",
            {
              "legacy": true
            }
          ],
          "/Users/alfred/Desktop/dvp/plutarch/packages/plutarch/node_modules/@babel/plugin-proposal-function-sent/lib/index.js",
          "/Users/alfred/Desktop/dvp/plutarch/packages/plutarch/node_modules/@babel/plugin-proposal-export-namespace-from/lib/index.js",
          "/Users/alfred/Desktop/dvp/plutarch/packages/plutarch/node_modules/@babel/plugin-proposal-numeric-separator/lib/index.js",
          "/Users/alfred/Desktop/dvp/plutarch/packages/plutarch/node_modules/@babel/plugin-proposal-throw-expressions/lib/index.js",
          "/Users/alfred/Desktop/dvp/plutarch/packages/plutarch/node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js",
          "/Users/alfred/Desktop/dvp/plutarch/packages/plutarch/node_modules/@babel/plugin-syntax-import-meta/lib/index.js",
          [
            "/Users/alfred/Desktop/dvp/plutarch/packages/plutarch/node_modules/@babel/plugin-proposal-class-properties/lib/index.js",
            {
              "loose": true
            }
          ],
          "/Users/alfred/Desktop/dvp/plutarch/packages/plutarch/node_modules/@babel/plugin-proposal-json-strings/lib/index.js"
        ],
        "cacheDirectory": true
      }
    }
  ],
  "exclude": [
    /node_modules/
  ]
};
  config.module.rules.unshift(jsloader);
  config.module.rules.push({
    test: /.tsx?$/,
    use: [
      ...jsloader.loader,
      {
        loader: require.resolve('ts-loader'),
        options: {
          transpileOnly: true,
        },
      },
      require.resolve('react-docgen-typescript-loader'),
    ],
  });
  config.module.rules.push({
    test: /.less$/,
    use: [
      require.resolve('style-loader'), 
      {
  "loader": "/Users/alfred/Desktop/dvp/plutarch/packages/plutarch/node_modules/css-loader/index.js",
  "options": {
    "modules": true,
    "camelCase": true,
    "localIdentName": "[local]",
    "importLoaders": 2
  }
},
      { loader: require.resolve('postcss-loader'), 
        options: {
          plugins: [require("autoprefixer")("last 100 versions")]
        },
      },
      require.resolve('less-loader')
    ],
  });
  config.resolve.alias = {
    ...config.resolve.alias, 
    ...{"components":"/Users/alfred/Desktop/dvp/tac-routes/src/components","context":"/Users/alfred/Desktop/dvp/tac-routes/src/context","utils":"/Users/alfred/Desktop/dvp/tac-routes/src/utils","lib":"/Users/alfred/Desktop/dvp/tac-routes/src"}
  };
  config.resolve.extensions = [
    ...config.resolve.extensions, 
    ...[".web.js",".js",".jsx",".ts",".tsx",".json"]
  ];
  return config;
};