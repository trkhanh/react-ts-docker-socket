module.exports = {
    entry: "./app/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/public/js"
    },
    mode: 'development',
    devtool: "source-map",

    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
};