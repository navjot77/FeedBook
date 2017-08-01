import webpack from 'webpack';
import path from 'path';

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

const paths={
  build: path.join(__dirname,'app'),
    dist:path.join(__dirname,'dist')
}

const buildOption=process.env.npm_lifecycle_event;

const isproduction=buildOption==='production';

const productionPlugin=new webpack.DefinePlugin({
    'process.env':{
      NODE_ENV:JSON.stringify('production')
    }

});
process.env.BABEL_ENV = buildOption;
const base= {
  entry: [
    paths.build
  ],
  output: {
    path:paths.dist,
    filename: "index_bundle.js",
      publicPath: "/"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.css$/, loader: 'style!css?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]'}
    ]
  },
    resolve: {
        root: path.resolve('./app')
    }
}

const developmentConfig= {

  devtool:'cheap-module-source-map',
    devServer: {
        contentBase: paths.build,
        hot: true,
        inline: true,
        progress: true,
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [HTMLWebpackPluginConfig,new webpack.HotModuleReplacementPlugin()]

};

export default Object.assign({},base,isproduction===true ? productionPlugin : developmentConfig)