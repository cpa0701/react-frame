/**
 * Create by chenpengan on 2019/1/29
 */
module.exports = (context) => {
  const { webpack } = context;
  const TerserPlugin = require('terser-webpack-plugin'); // 压缩js插件
  const UglifyJsPlugin = require('uglifyjs-webpack-plugin');// 压缩js插件
  // webpack config
  return {
    optimization: { // 代码分离
      runtimeChunk: { // 抽离出每个chunk的映射关系，不抽离则缓存将失效
        name: 'manifest',
      },
      minimizer: [new TerserPlugin(), new UglifyJsPlugin()],
      splitChunks: {
        chunks: 'async',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        name: false,
        cacheGroups: {
          vendor: {
            name: 'vendor',
            chunks: 'async',
            test: /[\\/]node_modules[\\/]/,
            maxSize: process.env.NODE_ENV !== 'production' ? 0 : 300000,
          },
          styles: {
            name: 'styles',
            test: /\.(scss|css)$/,
            chunks: 'async',
            minChunks: 1,
            reuseExistingChunk: true,
            enforce: true,
          },
        },
      },
    },
  };
};
