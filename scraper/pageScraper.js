const { Page } = require("puppeteer");
require('dotenv').config()

const firebase = require('firebase');

const firebaseConfig = {
    projectId: process.env.PROJECTID,
  };
app = firebase.initializeApp(firebaseConfig);
 
const scraperObject = {
    url: 'https://www.hipotecasyeuribor.com/euriboranoactual.php',
    async scraper(browser){

      const page = await browser.newPage()
      await page.goto(this.url);
      const value = await page.$eval('#cabeceraderecha2 span', el => el.innerText)
      console.log(value);

      const db = firebase.firestore();
      db.collection('euribor');
       
      db.collection("euribor").doc("actual").set({
        value: value.replace("%",""),
        date: Date.now(),
      })
      const date= Date.now().toString();
      db.collection("euribor").doc(date).set({
        value: value.replace("%",""),
        date: date,
      })
      await browser.close();
      console.log("Finish......");
      setTimeout(() => {
        process.kill(process.pid, 'SIGTERM')  
      }, 5000);
    }
}

module.exports = scraperObject;