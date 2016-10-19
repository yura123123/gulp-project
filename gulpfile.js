var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglifyjs'),
	cssnano = require('gulp-cssnano'),
	rename = require('gulp-rename'),
	del = require('del'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	cache = require('gulp-cache'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
	return gulp.src("app/sass/**/*.sass")
		.pipe(sass())
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream:true}))
});

gulp.task("scripts", function(){
	return gulp.src(["app/libs/jquery/dist/jquery-3.1.1.js", "app/libs/toastr/toastr.js", "app/libs/toastr/build/toastr.min.js", "app/libs/toastr/toastr.js"])
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'))
});

gulp.task("toastr", function(){
	return gulp.src(["app/libs/jquery/dist/jquery-3.1.1.js", "app/libs/jquery/dist/jquery-3.1.1.js", "app/libs/toastr/toastr.js", "app/libs/toastr/build/toastr.min.js", "app/libs/toastr/toastr.js", "app/libs/toastr/build/toastr.min.js"])
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'))
});



gulp.task("css-libs", ['sass'],  function(){
	return gulp.src(["app/libs/bower/normalize.css", "app/libs/font-awesome/css/font-awesome.min.css", "app/libs/toastr/build/toastr.css", "app/libs/bootstrap/dist/css/bootstrap.css"])
	.pipe(cssnano('styles.css'))
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('app/css'));
});

gulp.task("browser-sync", function() {
	browserSync.init({
		server: {
			baseDir: 'app'
		},
		notify: false
	});	
});

gulp.task("clean", function(){
	return del.sync('dist');
});

gulp.task("clear", function(){
	return cache.clearAll();
});

gulp.task("img", function(){
	return gulp.src('app/images/**/*')
		.pipe(cache(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlagins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('dist/images'));
});

gulp.task('watch', ["browser-sync", 'css-libs', 'scripts'], function(){
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/*.js', browserSync.reload);
});

gulp.task('build', ['clean', 'watch', 'img', 'sass', 'scripts'], function() {
	
	var builCss = gulp.src('app/css/**/*.css')
		.pipe(gulp.dest('dist/css'));

		var buildFonts = gulp.src('app/fonts/**/*')
			.pipe(gulp.dest('dist/fonts'));

		var buildJs = gulp.src(['app/js/**/*.js'])
			.pipe(gulp.dest('dist/js'));

		var buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));

});