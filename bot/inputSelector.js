  
 export async function selectorInput(page,input,value){
    const inputSelector = input ;
    await page.waitForSelector(inputSelector);
    await page.type(inputSelector,value);
}