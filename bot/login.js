// Bot automatizado
import puppeteer from 'puppeteer';
import { selectorInput } from './inputSelector.js';
import { visitPage } from './pageUrl.js';
import { clickInput } from './click.js';

async function openPageChaturbate(){
  const browser = await puppeteer.launch({
    headless:false,
    slowMo:400
  })
  const page = await browser.newPage();

  await visitPage(page,"https://chaturbate.com/auth/login/");

  await selectorInput(page,'input[name="username"]','donjuanc230');
  await selectorInput(page,'input[name="password"]','ju4ncarl05');
  
  Promise([
    clickInput(page,'input[value="Iniciar sesión"]')
    ]).then(()=>{
      console.log('Haciendo click en la pagina')
    })
  
  await new   Promise(r=>setTimeout(r,10000));
  await browser.close();

  
}

openPageChaturbate();
