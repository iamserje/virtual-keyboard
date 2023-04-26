import { createComponent } from "./create-element.js";
import { createAlphabets } from "./alphabets.js"
import { getLanguage } from "./what-lang.js";

export function createKeyboard() {
   const keyboard = createComponent('div', {
      className: 'keyboard'
   });
   let lower = 'lower';
   let keyboardTemplate = createAlphabets('en', lower);
   console.log('len', keyboardTemplate)
   return keyboard;
}