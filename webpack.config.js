const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill', './index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 4200
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '!data.js',
                '!assets/**',
            ]
        })
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: [
            //                 '@babel/preset-env'
            //             ],
            //             plugins: [
            //                 '@babel/plugin-proposal-class-properties'
            //             ]

            //         }
            //     }
            // },
            // {
            //     test: /\.ts$/,
            //     exclude: /node_modules/,
            //     loader: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: [
            //                 '@babel/preset-env',
            //                 '@babel/preset-typescript'
            //             ],
            //             plugins: [
            //                 '@babel/plugin-proposal-class-properties'
            //             ]
            //         }
            //     }
            // }

            // {
            //     test: /\.(png|jpg|svg|gif|)$/,
            //     use: ['file-loader']
            // },
        ]
    }
}