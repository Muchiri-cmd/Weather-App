const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');


module.exports = {
    mode:'development',
    entry: {
        index: './src/assets/js/index.js',
    },
    devtool: 'inline-source-map',
    devServer:{
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Weatherly',
          template: './src/index.html'
        }),
        new Dotenv(),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean:true,
        publicPath:'',
    },
    optimization: {
        runtimeChunk: 'single',
    },
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify"),
            "os": require.resolve("os-browserify/browser"),
            "crypto": require.resolve("crypto-browserify"),
            "vm": require.resolve("vm-browserify"),
            "buffer": require.resolve("buffer/"),
            "stream": require.resolve("stream-browserify")
        }
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader'],
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type:'asset/resource',
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/i,
                type:'asset/resource',
            },
            {
                test:/\.(csv|tsv)$/i,
                use:['csv-loader'],
            },
            {
                test:/\.xml$/i,
                use:['xml-loader'],
            },
            {
                test: /\.toml$/i,
                type: 'json',
                parser: {
                  parse: toml.parse,
                },
            },
            {
                test: /\.yaml$/i,
                type: 'json',
                parser: {
                    parse: yaml.parse,
                },
            },
            {
                test: /\.json5$/i,
                type: 'json',
                parser: {
                  parse: json5.parse,
                },
            },
        ],
    },
      
};