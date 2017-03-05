

var Movie = require('../model').Movie;
var async = require('async');
var debug = require('debug')('crawl:write');
exports.movie = function (movies, callback) {
    async.forEach(movies, function (item, cb) {
        //console.log(arguments);
        Movie.create(item, cb);
    }, callback);
};