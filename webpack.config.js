const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

const isProduction = process.env.NODE_ENV === "production"

module.exports = {
    mode: isProduction ? "production" : "development",
    entry: "./src/js/choice_levels.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js", ".css"],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: "./src/static", to: "static" }],
        }),
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
        new MiniCssExtractPlugin(),
    ],
    optimization: {
        minimizer: ["...", new CssMinimizerPlugin()],
    },
    devtool: isProduction ? "hidden-source-map" : "source-map", // Для отслеживания ошибок
}
// {
//     test: /\.css$/,
//     use: ExtractTextPlugin.extract({
//       fallback: 'style-loader',
//       use: 'css-loader'
//     })
//   }
// test: /\.css$/,
//     use: [
//         {
//             loader: require.resolve("style-loader")
//         },
//         {
//             loader: require.resolve("css-loader")
//         }
//     ],
//     include: /\.module\.css$/
