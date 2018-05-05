const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputDir = "build";
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const MODE = 'development';
const enabledSourceMap = (MODE === 'development');

module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: MODE,


    entry: './src/ts/main.ts',
    output: {
        path: `${__dirname}/`+outputDir,
        filename: 'main.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/pug/main.pug',
            inject: true
        })
    ],

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.pug$/,
                loader: ['raw-loader', 'pug-html-loader']
            },
            {
                test: /\.scss/, // 対象となるファイルの拡張子
                use: [
                    // linkタグに出力する機能
                    'style-loader',
                    // CSSをバンドルするための機能
                    {
                        loader: 'css-loader',
                        options: {
                            // オプションでCSS内のurl()メソッドの取り込みを禁止する
                            url: false,
                            // ソースマップの利用有無
                            sourceMap: enabledSourceMap,

                            // 0 => no loaders (default);
                            // 1 => postcss-loader;
                            // 2 => postcss-loader, sass-loader
                            importLoaders: 2
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            // ソースマップの利用有無
                            sourceMap: enabledSourceMap,
                        }
                    }
                ],
            },
            {
                test: /\.(glsl|vs|fs|frag|vert)$/,
                loader: 'shader-loader'
            },
        ]
    },
    resolve: {
        extensions: [
            '.ts', '.js', '.json', '.pug', '.styl', '.glsl', '.frag', '.vert', '.scss'
        ],
    },
    devServer: {
        contentBase: path.resolve(__dirname, outputDir),
        port: 3000,
        host: "0.0.0.0"
    },
};
