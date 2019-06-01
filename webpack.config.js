const path = require('path');
const ExtractTextPlugin = require('mini-css-extract-plugin')
// entry -> output

module.exports = (env) => {
    const isProduction = env === 'production';
    return {
        mode: 'production',
        entry: './src/app.js',
        output:{
            path: path.join(__dirname, 'public/'),
            filename: 'bundle.js'
        },
        plugins:[
            new ExtractTextPlugin('main.css'),
        ],
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test:/\.s?css$/,
                use: [{
                    loader: ExtractTextPlugin.loader,
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                    }
                },
                {
                    loader:'sass-loader',
                    options: {
                        sourceMap: true,
                    }
                },
            ],
            }]
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase:path.join(__dirname, 'public/')
        }
    };
};



//loader