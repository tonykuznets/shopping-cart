import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";

const PATH = {
  src: path.resolve(__dirname, "../src"),
  build: path.resolve(__dirname, "../build"),
  public: path.resolve(__dirname, "../public"),
  UI: path.resolve(__dirname, "../src/components/UI"),
};

const CONFIG: webpack.Configuration = {
  mode: "development",
  entry: PATH.src + "/index.tsx",
  output: {
    path: PATH.build,
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: ["*", ".js", ".json"],
    alias: {
      "@UI": PATH.UI,
      "@": PATH.src,
    },
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: PATH.public + "/index.html",
      minify: {
        collapseWhitespace: true,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.svg$/,
        use: ["file-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node-modules/,
        loader: "ts-loader",
      },
    ],
  },
};

export default CONFIG;