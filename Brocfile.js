/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
    sassOptions: {
        includePaths: ['bower_components/materialize/sass']
    }
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.
/*
app.import('bower_components/owl.carousel/dist/owl.carousel.js', {
	//type: 'vendor',
	//prepend: false
});

/**
<link rel="stylesheet" href="http://owlgraphic.com/owlcarousel/owl-carousel/owl.carousel.css">
    <link rel="stylesheet" href="http://owlgraphic.com/owlcarousel/owl-carousel/owl.theme.css">
*/

/*
app.import('bower_components/owl-carousel2/dist/assets/owl.carousel.css', {
	type: 'vendor',
	prepend: true
	//destDir: 'assets'
});

app.import('bower_components/owl-carousel2/dist/assets/owl.theme.default.css', {
	type: 'vendor',
	prepend: true
	//destDir: 'assets'
});
/**
*/

module.exports = app.toTree();
