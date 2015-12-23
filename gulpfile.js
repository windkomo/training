var gulp             = require('gulp');
//var bootstrap      = require('bootstrap-styl');
var stylus           = require('gulp-stylus');
var gutil            = require('gulp-util');
var webpack          = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig    = require('./webpack.config.js');

var paths = {
    scripts: ['client/js/**/*.coffee', '!client/external/**/*.coffee'],
    styles: ['assets/styles/**/*.styl'],
    images: 'client/img/**/*'
};

gulp.task('webpack-dev-server', function (c) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    myConfig.devtool = 'eval';
    myConfig.debug = true;
    // Start a webpack-dev-server
    new WebpackDevServer(webpack(myConfig))
    .listen(myConfig.devServer.port, 'localhost', function (err) {
        if (err) {
            throw new gutil.PluginError('webpack-dev-server', err);
        }
        gutil.log('[webpack-dev-server]', 'http://localhost:3333/index.html');
    });
});

gulp.task('styles', function () {
    gulp.src('./assets/styles/**/*')
        .pipe(stylus())
        .pipe(gulp.dest('./build/'));
});


// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.styles, ['styles']);
    gulp.watch(paths.images, ['images']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'styles', 'webpack-dev-server']);
