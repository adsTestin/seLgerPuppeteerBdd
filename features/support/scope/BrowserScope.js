const puppeteer = require('puppeteer');
const puppeteerOptions = require('../../../package.json').puppeteerOptions;
// to be integrated in the future
const browserOptions  = require('../../../package.json').browserOptions;

/**
 * Manage the Puppeteer browser and page objects.
 */
class BrowserScope {
    constructor(args){
        this.browser = null;
        this.config = null;
        this.page = null;
        this.worldParameters = args && args.parameters ? args.parameters : {};
        this.attach = args && args.attach ? args.attach : null;
    }

    async init(){
        const defaultOptions = {
         
            args: ['--no-sandbox', '--disable-dev-shm-usage',   "--ignore-certificate-errors",
            "--proxy-bypass-list=*"], 
            ignoreHTTPSErrors: true
        }
        
        this.close();
        
        this.config = {};
        this.browser = await puppeteer.launch({...defaultOptions, ...puppeteerOptions, ...this.worldParameters});
        this.page = await this.browser.newPage();
    }

    async close(){
        if(this.browser)
            await this.browser.close();
        
        this.browser = null;
        this.config = null;
        this.page = null;
    }
}

module.exports = BrowserScope;