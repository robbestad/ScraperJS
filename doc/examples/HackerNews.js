var sjs = require('../../src/Scraper');
/*
 Scrape the news in Hacker News.
 */
sjs.StaticScraper
        .create('http://feeds.ign.com/IGNPS4All')
	.scrape(function($) {
		return $('.itemtitle a').map(function() {
			return $(this).text();
		}).get().filter(function(elm) {
			return elm != 'More';
		});
	}, function(news) {
		news.forEach(function(elm) {
			console.log(elm);
		});
	});
