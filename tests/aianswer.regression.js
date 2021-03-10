import LoginPage from "../pages/LoginPage"
import CreateBot from "../pages/CreateBot"



describe('AIAnswer Automation',()=>{
    let loginpage;

    let createBot;
   
 

    beforeAll(async ()=>{
     jest.setTimeout(80000);
     loginpage=new LoginPage();
   
     createBot=new CreateBot();
     
    
    })


  it('Verify user able to create a bot',async ()=>{
        await loginpage.login();
      
        await loginpage.selectInstance();
      
        await createBot.clickCreateBot();
          
    })

   it('Verify user able to search the bot',async()=>{
   
    await createBot.searchBot();
          
    })

    it('Verify user can edit the bot',async ()=>{
       await createBot.editBot();
       await createBot.clickSettings();
    })

    it('Verify user able to delete bot',async ()=>{
 
     await createBot.clickDelete();
           
    })



   it('Verify user able to import bot',async ()=>{  
  

    await createBot.importModel();  
  

    })

    it('Verify user able create intent',async ()=>{  
  
        await createBot.clickBot(); 
        await createBot.clickIntents();
        await createBot.createIntents();
        await createBot.clickBack();
        await createBot.clickDeleteImport();
    
    })

    
})





