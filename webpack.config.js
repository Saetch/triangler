const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        // Have this example work in Edge which doesn't ship `TextEncoder` or
        // `TextDecoder` at this time.
        new webpack.ProvidePlugin({
          TextDecoder: ['text-encoding', 'TextDecoder'],
          TextEncoder: ['text-encoding', 'TextEncoder']
        }),
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, '.'), // Path to your Rust crate

            // Set the output directory where WebAssembly files will be placed
            outDir: path.resolve(__dirname, 'pkg'), // Matches wasm-pack default
      
            // Set the output name to "web" (instead of the crate name)
            outName: 'web',
      
            // Additional arguments passed to wasm-pack
            extraArgs: '--target web',
      
            // Ensure Webpack watches changes in the Rust crate directory
            watchDirectories: [path.resolve(__dirname, './src')],
        })
    ],
    mode: 'development',
    experiments: {
        asyncWebAssembly: true
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "../examples/assets"),
            publicPath: "/examples/assets"
        }
    }
};
