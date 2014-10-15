var sjs = require('./src/Scraper');
console.log('"gamespot":{');
sjs.StaticScraper
	.create('https://www.gamespot.com/ps4')
	.scrape(function($) {
		return $('.media-article .media-title').map(function() {
			return $(this).text().trim();
                }).get();
	}, function(news) {
		console.log("{\"titles\":[");
		var i=0;
		news.forEach(function(elm) {
                        console.log(" \""+i+"\":\""+elm.replace('"','')+"\",");
			i++;
			});
		console.log("]},");

        });

sjs.StaticScraper
        .create('https://www.gamespot.com/ps4')
	.scrape(function($) {
                return $('.media-article a').map(function() {
                        return $(this).attr('href');
                }).get();
	}, function(news) {
		console.log("{\"links\":[");
		var i=0;
		news.forEach(function(elm) {
			console.log(" \""+i+"\":\""+elm.replace('"','')+"\",");
			i++;
			});
		console.log("]}");
		console.log('}');
	});

