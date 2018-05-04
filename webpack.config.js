const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: 'development',

    entry: './src/ts/main.ts',
    output: {
        path: `${__dirname}/build`,
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
                test: /\.(glsl|vs|fs|frag|vert)$/,
                loader: 'shader-loader'
            },
        ]
    },
    resolve: {
        extensions: [
            '.ts', '.js', '.json', '.pug', '.styl', '.glsl', '.frag', '.vert'
        ],
    }
};
