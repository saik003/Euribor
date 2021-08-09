const browserObject = require('./browser');
const scraperController = require('./pageController');

var CronJob = require('cron').CronJob;
var job = new CronJob('0 1 * * *', function() {
      console.log("2");
    //Start the browser and create a browser instance
    let browserInstance = browserObject.startBrowser();
    // Pass the browser instance to the scraper controller
    scraperController(browserInstance);
}, null, true, 'America/Los_Angeles');
