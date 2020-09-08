# Automating some tasks while coding web.

This repo was made as a part of the course Webbutveckling III at Mittuniversitetet HT20.

All the "work in progress"-files should be kept in the 'src' folder, and the finished product will be output in the 'pub' folder.

The things that, as of now, are automated are:

Packaging CSS and JS-files into only one .css and one .js, and also compressess the contents of the file for faster file loading.

Compressing images that is added to the 'src/img'-folder.

Move everything to the right directory in the 'pub'-folder, ready to be put up on a webserver.

The finsihed product can also be viewed real time in a browser, every time you save something, it updates by itself.

***

The packages that are used in this gulp-setup:

	gulp-autoprefixer - adds vendor-prefixes to CSS by magic.

	browser-sync - the "live reload" part.

	gulp-clean-css - fixes the css (minifies it mostly)

	gulp-terser - does the same as gulp-clean-css but for javascript

	gulp-imageamin - tool to compress images

	gulp-concat - puts several files together into one

All the packages have been handpicked by me, because they had the most or near the most downloads per week on npmjs.

***

To install this on your machine make sure you have node.js and npm installed, then do this: 

```
git clone https://github.com/amesteDev/gulpenv
```

And then (in the directory where the local files are located):

```
npm install
```

Start by using:

```
gulp
```