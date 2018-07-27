const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    context: path.resolve('js'),

    entry: __dirname + "/src/app/app.js",
    output: {
        path: __dirname + "/src/build/",
        filename: "bundled.js"
    },

    plugins: [  // Array of plugins to apply to build chunk
        new HtmlWebpackPlugin({
            template: __dirname + "/src/public/index.html",
            inject: 'body'
        })
    ],

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js($|\?)/i,
            })
        ]
    },

    devServer: {  // configuration for webpack-dev-server
        contentBase: __dirname + '/src/public',  //source of static assets
        port: 7700, // port to run dev-server
    },

    mode: 'production',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/server/, /node_modules/],
                use: [
                    {
                        loader: 'ng-annotate-loader',
                    },
                    {
                        loader: "babel-loader"
                    }
                    ]

            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "raw-loader"
            },
            {

                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            }

        ]
    },

    resolve: {
        extensions: ['.js', '.es6']
    }
};


