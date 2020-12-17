//. git-clone.js
var git = require( 'simple-git' );
const { GIT_REPOSITORY, GIT_TOKEN, GIT_USER} = process.env;
var git_url =  `https:${GIT_USER}:${GIT_TOKEN}@github.com/${GIT_REPOSITORY}`;
var local_folder = 'work';
var fs = require( 'fs' );
var path = require( 'path' );

//. clone
git( local_folder ).add( 'test.json' ).commit( 'test.js updated.' ).push( [ 'push', 'origin', 'master' ] );