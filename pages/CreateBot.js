import {team,purpose,team2,intent,desc} from "../config";
import { CommonActionsControllerApi } from "mailslurp-client/dist/generated";

const expect=require('chai').expect
export default class CreateBot{

    async clickCreateBot(){
        await page.waitFor(5000)
        await page.waitForSelector('button[class="btn btn-primary btn-add-bot"]')
        await page.click('button[class="btn btn-primary btn-add-bot"]')
        await page.waitForSelector('#form-name')
        await page.click('#form-name')
        await page.type('#form-name',team)

        await page.waitForSelector('textarea[id="form-information.purpose"]')
        await page.click('textarea[id="form-information.purpose"]')
        await page.type('textarea[id="form-information.purpose"]',purpose)

      
        await page.waitForSelector('button[class="btn btn-primary"]')
        await page.click('button[class="btn btn-primary"]')
        await page.waitFor(2000)
        await page.waitForSelector('button[class="btn idle btn-primary"]')
        await page.click('button[class="btn idle btn-primary"]')
        await page.waitFor(8000)
       
    }
    async searchBot(){
        await page.waitFor(10000)
        await page.waitForSelector('input[type="search"]')
        await page.click('input[type="search"]')
        await page.click('input[type="search"]', {clickCount: 3})
        await page.type('input[type="search"]',team)
        await page.waitFor(2000)
        const text=await page.$eval('div[class="title"]',element => element.textContent)
        expect(text).to.be.a('string',team)
    }

    async editBot(){
        await page.waitForSelector('[class="lnr lnr-ellipsis"]')
        await page.click('[class="lnr lnr-ellipsis"]')
        await page.waitFor(5000)
        await page.waitForSelector('#root > div.component.layout.dashboard > div.body > div > div > main > div > section.bots > div > div:nth-child(2) > div > div > div.options.dropdown.show > div > button:nth-child(1)')
        await page.click('#root > div.component.layout.dashboard > div.body > div > div > main > div > section.bots > div > div:nth-child(2) > div > div > div.options.dropdown.show > div > button:nth-child(1)')
    
   
    }

    async clickSettings(){
        await page.waitForSelector('[class="component menu-item active"]')
        await page.click('[class="component menu-item active"]')
        await page.waitForSelector('[class="btn btn-outline-light"]')
        await page.click('[class="btn btn-outline-light"]')
        await page.waitForSelector("#form-name")
        await page.click("#form-name")
        await page.waitForSelector("#form-name")
        await page.click("#form-name", {clickCount: 3})
        await page.type("#form-name",team2)
        await page.waitForSelector('button[class="btn idle btn-primary"]')
        await page.click('button[class="btn idle btn-primary"]')
    }

    async clickDelete(){
        await page.waitFor(2000)
      
        await page.waitForSelector('[class="lnr lnr-arrow-left"]')
        await page.click('[class="lnr lnr-arrow-left"]')
        await page.waitFor(5000)
        await page.waitForSelector('input[type="search"]')
        await page.click('input[type="search"]')
        await page.type('input[type="search"]',team2)
        await page.waitFor(4000)
        const text=await page.$eval('div[class="title"]',element => element.textContent)
        expect(text).to.be.a('string',team2)
        await page.waitForSelector('[class="lnr lnr-ellipsis"]')
        await page.click('[class="lnr lnr-ellipsis"]')
        await page.waitForSelector('#root > div.component.layout.dashboard > div.body > div > div > main > div > section.bots > div > div:nth-child(2) > div > div > div.options.dropdown.show > div > button:nth-child(2)')
        await page.click('#root > div.component.layout.dashboard > div.body > div > div > main > div > section.bots > div > div:nth-child(2) > div > div > div.options.dropdown.show > div > button:nth-child(2)')
        await page.waitForSelector('#form-input')
        await page.type('#form-input',team2)
        await page.waitForSelector('[class="btn btn-primary"]')
        await page.click('[class="btn btn-primary"]')
    }



    async importModel(){
        await page.waitFor(5000)
        await page.waitForSelector('button[class="btn btn-primary btn-add-bot"]')
        await page.click('button[class="btn btn-primary btn-add-bot"]')
        await page.waitForSelector('#form-name')
        await page.click('#form-name')
        await page.type('#form-name',team2)

        await page.waitForSelector('textarea[id="form-information.purpose"]')
        await page.click('textarea[id="form-information.purpose"]')
        await page.type('textarea[id="form-information.purpose"]',purpose)

      
        await page.waitForSelector('button[class="btn btn-primary"]')
        await page.click('button[class="btn btn-primary"]')
        
        
        await page.waitForSelector('body > div:nth-child(4) > div > div.modal.fade.show > div > div > form > div > div.component.answer-template-selector > div > div:nth-child(2) > label > div.checker')
        await page.click('body > div:nth-child(4) > div > div.modal.fade.show > div > div > form > div > div.component.answer-template-selector > div > div:nth-child(2) > label > div.checker')
        await page.waitForSelector('button[class="btn btn-primary"]')
        await page.click('button[class="btn btn-primary"]')
        await page.waitForSelector('input[type=file]');
        await page.waitFor(1000);
    
        const inputUploadHandle = await page.$('input[type=file]');
    
        let fileToUpload = 'test-model.json';
   
        inputUploadHandle.uploadFile(fileToUpload);
        await page.waitFor(5000);
        await page.waitForSelector('span[class="text"]')
        await page.click('span[class="text"]')
        await page.waitFor(5000);

     
    }

    async clickBot(){
        await page.waitFor(7000)
      
        await page.waitForSelector('input[type="search"]')
        await page.click('input[type="search"]', {clickCount: 3})
        await page.type('input[type="search"]',team2)
        await page.waitFor(4000)
        const text=await page.$eval('div[class="title"]',element => element.textContent)
        expect(text).to.be.a('string',team2)
        await page.waitForSelector('a[class="card-body no-highlight"]')
        await page.click('a[class="card-body no-highlight"]')
    }

    async clickIntents(){
        await page.waitFor(4000)
        await page.waitForSelector('[class="name"]')
        const text=await page.$eval('[class="name"]',element => element.textContent)
        expect(text).to.be.a('string',team2)
      
        await page.waitForSelector('[class="icon lnr lnr-bubble-question"]')
        await page.click('[class="icon lnr lnr-bubble-question"]')
        
       
    }

    async createIntents(){

      
        await page.waitForSelector('#form-intent')
        await page.type('#form-intent',intent)
        await page.waitForSelector('#form-description')
        await page.type('#form-description',desc)
        await page.waitForSelector('input[placeholder="Type your example and press Enter to add to the list."]')
        await page.type('input[placeholder="Type your example and press Enter to add to the list."]',intent)
        await page.keyboard.press('Enter'); 
        await page.waitForSelector('[class="btn idle btn-primary"]')
        await page.click('[class="btn idle btn-primary"]')
        
    }

    async clickBack(){
        await page.waitForSelector('a[class="btn btn-icon"]')
        await page.click('a[class="btn btn-icon"]')
    }
   
    async clickDeleteImport(){
        await page.waitFor(4000)
      
        await page.waitForSelector('input[type="search"]')
        await page.click('input[type="search"]', {clickCount: 3})
        await page.type('input[type="search"]',team2)
        await page.waitFor(4000)
        const text=await page.$eval('div[class="title"]',element => element.textContent)
        expect(text).to.be.a('string',team2)
        await page.waitForSelector('[class="lnr lnr-ellipsis"]')
        await page.click('[class="lnr lnr-ellipsis"]')
        await page.waitForSelector('#root > div.component.layout.dashboard > div.body > div > div > main > div > section.bots > div > div:nth-child(2) > div > div > div.options.dropdown.show > div > button:nth-child(2)')
        await page.click('#root > div.component.layout.dashboard > div.body > div > div > main > div > section.bots > div > div:nth-child(2) > div > div > div.options.dropdown.show > div > button:nth-child(2)')
        await page.waitForSelector('#form-input')
        await page.type('#form-input',team2)
        await page.waitForSelector('[class="btn btn-primary"]')
        await page.click('[class="btn btn-primary"]')
    }



   
}