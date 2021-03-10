import {email,password,instance} from "../config";

export default class LoginPage{

    async login(){
        await page.setDefaultNavigationTimeout(200000)
         await page.goto('https://stg-platform.ai.rakuten-it.com/auth/login')
       // await page.goto('https://ai-dashboard.rakuten-it.com/login')
       
        await page.waitForSelector("#form-email")
        await page.click("#form-email")
        await page.waitForSelector("#form-email")
        await page.type("#form-email",email)
        await page.waitForSelector("#form-password")
        await page.click("#form-password")
        await page.waitForSelector("#form-password")
        await page.type("#form-password",password)
        await page.waitForSelector('button[class="btn btn-primary"]')
        await page.click('button[class="btn btn-primary"]')
        await page.waitFor(5000)
        await page.waitForSelector('div[id="sidebar-tooltip-answer"]')
        await page.click('div[id="sidebar-tooltip-answer"]')
    }

    async selectInstance(){
        await page.waitForSelector('input[name="search"]')
        await page.click('input[name="search"]')
        await page.type('input[name="search"]',instance)
        await page.waitFor(5000)
        await page.waitForSelector('button[class="btn btn-blank btn-team"]')
        await page.click('button[class="btn btn-blank btn-team"]')
    }

    async loginProd(){
        await page.setDefaultNavigationTimeout(200000)
     
        await page.goto('https://ai-dashboard.intra.rakuten-it.com/login')
        await page.waitForSelector('button[class="btn btn-primary btn-block mt-3"]')
        await page.click('button[class="btn btn-primary btn-block mt-3"]')
        await page.waitForSelector("#i0116")
        await page.type("#i0116",email)
        await page.waitForSelector("#idSIButton9")
        await page.click("#idSIButton9")
        await page.waitForSelector("#okta-signin-username")
        await page.type("#okta-signin-username",email)
        await page.type("#okta-signin-password",password)
        await page.click("#okta-signin-submit")
        await page.waitForSelector("#idSIButton9")
        await page.click("#idSIButton9")
    }
    async reloadPage(){
        await page.waitFor(10000)
        await page.reload()
    }
}