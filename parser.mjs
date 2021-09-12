import puppeteer from 'puppeteer';

const url = 'https://mnogomebeli.com/divany/pryamye-divany/divan-boss-velyur-monolit/!divan-boss-velyur-monolit-sand/';
export const getGoodsPrice = async (url)=>{
    const browser = await puppeteer.launch({
        headless: true, // false: enables one to view the Chrome instance in action
        defaultViewport: {
            width:1920,
            height:1080
        }, // (optional) useful only in non-headless mode
    });
    const page = await browser.newPage();
    await page.goto(url);
    const price = await page.$eval('p[class="item-header__price"]>span',(el)=>el.textContent);
    await browser.close();
    return price.trim();
}
