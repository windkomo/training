var gulp             = require('gulp');

var stylus           = require('gulp-stylus');
var gutil            = require('gulp-util');

var bootstrapStyl    = require('bootstrap-styl');

var webpack          = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig    = require('./webpack.config');

gulp.task('webpack-dev-server', function () {
    var config = Object.create(webpackConfig);

    config.devtool = 'eval';
    config.debug = true;

    new WebpackDevServer(webpack(config), {
        hot: true,
        colors: true
    })
    .listen(config.devServer.port, 'localhost', function (err) {
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

gulp.task('watch', function() {
    gulp.watch('assets/styles/**/*.styl', ['styles']);
});

gulp.task('default', [
    'watch',
    'webpack-dev-server',
    'styles',
]);
