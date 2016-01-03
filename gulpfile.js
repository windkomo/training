var gulp             = require('gulp');
var stylus           = require('gulp-stylus');
var gutil            = require('gulp-util');
var bootstrapStyl    = require('bootstrap-styl');
var webpack          = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig    = require('./webpack.config.js');

var paths = {
    styles: ['assets/styles/**/*.styl'],
};

gulp.task('webpack-dev-server', function (c) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    myConfig.devtool = 'eval';
    myConfig.debug = true;
    // Start a webpack-dev-server
    new WebpackDevServer(webpack(myConfig), {
        hot: true,
        colors: true
    })
    .listen(myConfig.devServer.port, 'localhost', function (err) {
        if (err) {
            throw new gutil.PluginError('webpack-dev-server', err);
        }
        gutil.log('[webpack-dev-server]', 'http://localhost:3333/index.html');
    });
});

gulp.task('styles', function () {
    gulp.src('./assets/styles/**/*')
        .pipe(stylus({ use: bootstrapStyl(), compress: true }))
        .pipe(gulp.dest('./static/'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.styles, ['styles']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', [
    'watch',
    'webpack-dev-server',
    'styles',
]);
