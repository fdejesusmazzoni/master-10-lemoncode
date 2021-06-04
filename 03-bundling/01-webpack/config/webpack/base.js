const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const helpers = require('./helpers');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(
  {},
  {
    context: helpers.resolveFromRootPath('src'),
    resolve: {
      alias: {
        '@material-ui/core': '@material-ui/core/es',
        common: helpers.resolveFromRootPath('src/common'),
        core: helpers.resolveFromRootPath('src/core'),
        layouts: helpers.resolveFromRootPath('src/layouts'),
        pods: helpers.resolveFromRootPath('src/pods'),
        scenes: helpers.resolveFromRootPath('src/scenes'),
        'common-app': helpers.resolveFromRootPath('src/common-app'),
        frames: helpers.resolveFromRootPath('src/frames'),
      },
      extensions: ['.js', '.ts', '.tsx'],
    },
    entry: {
      app: ['regenerator-runtime/runtime', './index.tsx'],
      appStyles: ['./styles.scss'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
              },
            },
          ],
        },
      ],
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            name: 'vendor',
            test: /[\\/]node_modules[\\/]/,
            enforce: true,
          },
        },
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],
  }
);
