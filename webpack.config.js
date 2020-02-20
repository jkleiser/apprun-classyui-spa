const fs = require('fs');
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

// https://stackoverflow.com/questions/24663175/how-can-i-inject-a-build-number-with-webpack
fs.writeFileSync(path.resolve(path.join(__dirname, 'src/version.ts')),
`// This file is auto-generated by the build system.
const BundleVersion = "${ new Date().toString().split("(")[0].trim() }";
export default BundleVersion;
`);

module.exports = {
  entry: {
    'dist/app': './src/main.tsx',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname)
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['classy-ui/plugin']
          }
        }
      }
    ]
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
  ]
};
