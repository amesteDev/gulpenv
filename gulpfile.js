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
	jsPATH: "src/**/*.js"
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

//browsersync to update the webpage in the browser as changes are made aswell as look for changes in the src-files and run the functions above
function watchingYou() {

	browsersync.init({
		server: {
			baseDir: './pub/'
		}
	});

	watch([paths.htmlPATH, paths.cssPATH, paths.jsPATH],
		parallel(copyHTML, jsFix, cssFix));

	watch('pub/js').on('change', browsersync.reload);
	watch('pub/css').on('change', browsersync.reload);
	watch('pub').on('change', browsersync.reload);
}

exports.default = series(
	parallel(copyHTML, jsFix, cssFix),
	watchingYou
);