# Automating some tasks while coding web.

This repo was made as a part of the course Webbutveckling III at Mittuniversitetet HT20.

All the "work in progress"-files should be kept in the 'src' folder, and the finished product will be output in the 'pub' folder.

The things that, as of now, are automated are:
Packaging CSS and JS-files into only one .css and one .js, and also compressess the contents of the file for faster file loading.
Compressing images that is added to the 'src'-folder.
Move everything to the right directory in the 'pub'-folder, ready to be put up on a webserver.

To install this on your machine make sure you have node.js and npm installed, then do this: 

```
git clone https://github.com/amesteDev/simon_says
```

And then (in the directory where the local files are located):

```
npm install
```

Start by using:

```
gulp
```