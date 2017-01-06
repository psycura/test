let webpack = require('webpack');
module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module:{
        loaders:[
            {
                // test:/\.scss$/,
                // loader:'style!css!scss'
            }
        ]
    }
    
};
