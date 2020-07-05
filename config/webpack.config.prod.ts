import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const PATH = {
  src: path.resolve(__dirname, '../src'),
  build: path.resolve(__dirname, '../build'),
  public: path.resolve(__dirname, '../public'),
  UI: path.resolve(__dirname, '../src/components/UI'),
};

const CONFIG: webpack.Configuration = {
  mode: 'production',
  entry: PATH.src + '/index.tsx',
  output: {
    path: PATH.build,
    filename: 'static/[name].bundle.[hash].js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors', // part of the bundle name and
          // can be used in chunks array of HtmlWebpackPlugin
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
        common: {
          test: /[\\/]src[\\/]/,
          chunks: 'all',
          minSize: 0,
        },
      },
    },
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.json'],
    alias: {
      '@UI': PATH.UI,
      '@src': PATH.src,
    },
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|jpg|JPG|jpeg|png)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node-modules/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({}),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
    }),
    new HTMLWebpackPlugin({
      template: PATH.public + '/index.html',
      minify: {
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
        collapseWhitespace: true,
      },
    }),
  ],
};

export default CONFIG;
