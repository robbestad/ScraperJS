var sjs = require('../src/Scraper');
var _ = require('../node_modules/underscore/underscore');
console.log('{');
sjs.StaticScraper
	.create('http://www.ign.com/ps4')
	.scrape(function($) {
        return $('.listElmnt-storyHeadline').map(function() {
                return $(this).attr("href");
		}).get().filter(function(elm) {
			return elm != 'More';
		});
	}, function(news) {
		var i=0, out="";
        _.uniq(news).forEach(function(elm) {
			if(elm.indexOf("articles") !== -1) {
              out+=(" \""+i+"\":\""+elm.replace('"','')+"\",\n");
			  i++;
			  }
			});
        console.log(out.substring(0, out.length-1)+"\n}");
	});

