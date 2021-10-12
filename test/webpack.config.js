const path = require('path')
const webpack = require('webpack')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const WrapperPlugin = require('wrapper-webpack-plugin')

const config = {
  mode: process.env.NODE_ENV || 'production',
  entry: {
    rules: '../src/rules/index',
    lang: '../src/localisation/en'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'${process.env.NODE_ENV || 'production'}'`
      }
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new WrapperPlugin({
      test: /\.js$/,
      header (fileName, args) {
        return (`(function umdWrapper(root, factory) {
  if(typeof exports === "object" && typeof module === "object")
    module.exports = factory().default;
  else if(typeof define === "function" && define.amd)
    define("NAME", [], function() { return factory().default; });
  else if(typeof exports === "object")
    exports["NAME"] = factory().default;
  else
    root["NAME"] = factory().default;
  })(this, function() {
  return `).replace(/NAME/g, fileName)
      },
      footer: '\n})'
    })
  ],
  module: {
    rules: [{
      test: /\.css$/,
      loaders: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.jsx?$/,
      loaders: [{
        loader: 'babel-loader',
        options: {
          babelrc: false,
          cacheDirectory: true,
          plugins: [
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-transform-modules-commonjs'
          ],
          presets: [
            ['@babel/preset-env', {
              targets: {
                browsers: [
                  'last 2 versions'
                ]
              },
              exclude: [
                'transform-regenerator'
              ],
              modules: false,
              loose: true
            }],
            '@babel/preset-react'
          ],

          env: {
            development: {
              plugins: [

              ]
            },
            production: {

            },
            test: {
              plugins: [
                ['istanbul']
              ]
            }
          }
        }
      }],
      exclude: /node_modules/
    }, {
      test: /\.(jpe?g|png)$/i,
      loader: 'file-loader'
    }, {
      test: /\.svg$/,
      loader: 'svg-inline-loader'
    }, {
      test: /\.(gif)$/i,
      loaders: [
        'file-loader'
      ]
    }, {
      test: /\.(ttf|eot|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loaders: [
        'file-loader?name=fonts/[name]-[hash].[ext]'
      ]
    }, {
      test: /\.(wav|mp3)$/i,
      loaders: [
        'file-loader?name=[name]-bundle-[hash].[ext]'
      ]
    }, {
      test: /\.json$/,
      loaders: [
        'json-loader'
      ]
    }, {
      test: /\.(gpx|tcx)$/i,
      loaders: [
        'file-loader?name=[name]-bundle-[hash].[ext]'
      ]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true,
          parse: {
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false
          },
          mangle: {
            safari10: true
          },
          output: {
            ecma: 5,
            comments: false
          }
        },
        parallel: true,
        cache: true,
        sourceMap: true
      })
    ]
  }
}

module.exports = config