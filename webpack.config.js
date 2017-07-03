module.exports = {
    entry:'./assets/js/app.js',

    output: { 
        filename:'./dist/app.js'
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    presets:['es2015']
                }
            }
        ]
    }
}