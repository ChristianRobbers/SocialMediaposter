const puppeteer = require('puppeteer');

//Locig for getting items from infinite scroll pages
const scrollPage = async (page) => {

    // accepting cookies to make page scroll

    setTimeout(async () => {
        const cookieAccept = await page.$(".coi-banner__accept")
        await cookieAccept.click();
    }, 50)
    
    // Calculating the body height and scrolls the page

    await page.evaluate(async () => {
        await new Promise((reslove) => {
            let totaltheight = 0;
            const distance = 100;
            let timer = setInterval(() => {
                let scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totaltheight += distance;

                if(totaltheight >= scrollHeight - window.innerHeight) {
                    clearInterval(timer)
                    reslove()
                }
            }, 130)
        })
    })

}

//The scraping logic
 module.exports = async function(req, res, next) {

    const shopPageUrl = "https://home.dk/resultatliste?IsBusinessSearch=false&CurrentPageNumber=0&SearchResultsPerPage=15&Forretningnr=144&Energimaerker=null&BoligKanLejes=true&BoligTilSalg=true&SearchType=0"
    const resultArray = []

    const browser = await puppeteer.launch({
        headless: true,
        ignoreHTTPSErrors: true,
        args: [`--window-size=1920,1080`],
        defaultViewport: {
          width: 1920,
          height: 1080,
    }});
    const page = await browser.newPage();

    await page.goto(shopPageUrl);

    // scrolling the page to get all the content
    

    try {
      
            await scrollPage(page);

    } finally {

        const propertyInfo = await page.evaluate(() => Array.from(document.querySelectorAll('.home-tile-info.col-md-4.alpha'), (e) => ({
            link: e.querySelector('.link').href,
            title: e.querySelector('.hidden').innerText,
            postalCode: e.querySelector('[itemprop=postalCode]').innerText,
            city: e.querySelector('[itemprop=addressLocality]').innerText,
        })))
    
        const propertyImg = await page.evaluate(() => Array.from(document.querySelectorAll('.slick-slide.slick-current.slick-active'), (e) => ({
            img: e.querySelector('.img-responsive.w100').src
        })))
    
        //merge the property info with the property img scraped
        propertyInfo.forEach((object, i) => {
            object.img = propertyImg[i].img
        })
        
        resultArray.push(propertyInfo)

    }

    req.scrape = resultArray

    await browser.close();

    next()
 }