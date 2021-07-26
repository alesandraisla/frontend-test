
// Abaixo com a versão Gulp 4

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

// task js-npm para node_modules pegar boooot, jquer, poppder, slider

// task js copiar arq .js
gulp.task('js', gulp.series( function() {
    return gulp.src([
        'src/js/*.js',
    ]) //ler 
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream()); // gravar 
}));

// jquery , bootstrap, slick 
gulp.task('vendor-js', gulp.series( function() {
    return gulp.src([
        './node_modules/@fortawesome/awesome/js/fontawesome.js',
        './node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap/dist/js/bootstrap.js', 
        './node_modules/slick-carousel/slick/slick.js',
    ]) 
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('dist/js')); // gravar 
}));

gulp.task('html', gulp.series( function() {
    return gulp.src(['src/index.html']) //ler 
    .pipe(gulp.dest('dist')); // gravar 
}));

gulp.task('images', gulp.series( function() {
    return gulp.src(['src/images/*'])
    .pipe(gulp.dest('dist/images'));
}))

gulp.task('fonts', gulp.series( function() {
    return gulp.src(['node_modules/slick-carousel/slick/fonts/*'])
    .pipe(gulp.dest('dist/fonts'));
}))

gulp.task('fonts-awesome', gulp.series( function() {
    return gulp.src(['node_modules/@fortawesome/awesome/webfonts/*'])
    .pipe(gulp.dest('dist/webfonts'));
}))




gulp.task('sass', gulp.series( function() {
    return gulp.src([
        'node_modules/bootstrap/scss/*.scss',
        'node_modules/@fortawesome/awesome/css/all.css',
        'node_modules/slick-carousel/slick/slick.scss',
        'node_modules/slick-carousel/slick/slick-theme.scss',
        'src/scss/*.scss',
    ]) //ler 
    .pipe(sass()) // converter o Sass em CSS
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream()); // gravar 
}));


// copiar index,img

// Static server
gulp.task('serve', gulp.series('sass', 'vendor-js', 'js', 'html', 'images', 'fonts', 'fonts-awesome', function() {
    browserSync.init({
        server: "./dist"
    });

    gulp.watch("src/scss/*.scss", gulp.series(['sass']));
    gulp.watch("src/js/*.js", gulp.series(['js']));
    gulp.watch("src/images/*.images", gulp.series(['images']));
    gulp.watch("src/index.html", gulp.series(['html'])).on('change', browserSync.reload);
}));

// gulp.task('build', ['sass', 'vendor-js', 'js', 'html'])
gulp.task('default',gulp.series('sass', 'vendor-js', 'js', 'html', 'images', 'fonts', 'fonts-awesome',))
