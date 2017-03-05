
//传入url地址返回对象数组
var request = require('request');
var iconv = require('iconv-lite');
var cheerio = require('cheerio');
var debug = require('debug')('crawl:read');
exports.movie = function (url, callback) {
    //请求网址内容
    request({url,encoding:null},function (err, response, body) {
        //实现在一个转码，把gbk编码的buffer转换成utf8格式的字符串
        body = iconv.decode(body,'gbk');
        //把此响应体字符串转换成$对象
        var $ = cheerio.load(body);
        var movies = [];
        $('.keyword .list-title').each(function () {
            //把当前对象转换成jquery对象
            var $me = $(this);

            var movie = {
                name:$me.text(),
                url:$me.attr('href')
            };
            debug(`读到电影:${movie.name}`);
            movies.push(movie);
        });
        //console.log(movies);
        callback(err,movies);
    })
};
/*exports.movie('http://top.baidu.com/buzz?b=7&c=10&fr=topcategory_c10',function (err, movie) {
    console.log(movie);
});*/
