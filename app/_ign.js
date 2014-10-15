var sjs = require('./src/Scraper');
var _ = require('./node_modules/underscore/underscore');

console.log('"ign":{');

sjs.StaticScraper
	//.create('http://feeds.ign.com/IGNPS4All')
	.create('http://www.ign.com/ps4')
	.scrape(function($) {
                return $('.listElmnt-storyHeadline').map(function() {
                        return $(this).attr("href");
		}).get().filter(function(elm) {
			return elm != 'More';
		});
	}, function(news) {
		console.log("{\"links\":[");
		var i=0;
                _.uniq(news).forEach(function(elm) {
			if(elm.indexOf("articles") !== -1)
                          console.log(" \""+i+"\":\""+elm.replace('"','')+"\",");
			i++;
			});
		console.log("]}");
		console.log('}');
	});

