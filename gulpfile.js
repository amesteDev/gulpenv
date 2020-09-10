//load plugins

const { src, dest, watch, series, parallel, task } = require("gulp");
const cssprefix = require("gulp-autoprefixer");
const browsersync = require("browser-sync").create();
const terser = require("gulp-terser");
const imgmin = require("gulp-imagemin");
const concat = require("gulp-concat");
const cleancss = require("gulp-clean-css");

//setting up paths to be used
const paths = {
	htmlPATH: "src/**/*.html",
	cssPATH: "src/**/*.css",
	jsPATH: "src/**/*.js",
	imgPATH: "src/img/*"
}

//copy HTML from the SRC-folder to the pub-folder
function copyHTML() {
	return src(paths.htmlPATH)
		.pipe(dest('pub'))
}

//concat js-files to one and minify the new file
function jsFix() {
	return src(paths.jsPATH)
		.pipe(concat('script.js'))
		.pipe(terser())
		.pipe(dest('pub/js'))
}

//concat css to one file, add prefixes for browser and minify it.
function cssFix() {
	return src(paths.cssPATH)
		.pipe(concat('style.css'))
		.pipe(cssprefix())
		.pipe(cleancss())
		.pipe(dest('pub/css'))
}

//minimize images, change quality and optimizationlevel to be according to the standards of your project
function imgFix(){
	return src(paths.imgPATH)
		.pipe(imgmin([
			imgmin.gifsicle({interlaced: true}),
			imgmin.mozjpeg({quality: 75, progressive: true}),
			imgmin.optipng({optimizationLevel: 5})
		]))
		.pipe(dest('pub/img'))
}

//browsersync to update the webpage in the browser as changes are made aswell as look for changes in the src-files and run the functions above
function watchingYou() {

	browsersync.init({
		server: {
			baseDir: './pub/'
		}
	});

	watch([paths.htmlPATH, paths.cssPATH, paths.jsPATH, paths.imgPATH],
		parallel(copyHTML, jsFix, cssFix, imgFix));

	watch(['pub/js', 'pub/css', 'pub', 'pub/img']).on('change', browsersync.reload);

}

exports.webdevkit = series(
	parallel(copyHTML, jsFix, cssFix, imgFix),
	watchingYou
);