const puppeteer = require('puppeteer');

module.exports = async function (req, res, next) {
    const resultArray = []

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(req.headers.propertyurl)
    
    const propertyText = await page.evaluate(() => Array.from(document.querySelectorAll('.inside'), (e) => ({
        text: e.innerHTML.replaceAll(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>|(\r\n|\n|\r)|\s{2,}/g, "").trim()
    })))

    resultArray.push(propertyText)

    await browser.close()
    
    req.scrape = resultArray

    next()
 }