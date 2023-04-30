import { createComponent } from "./create-element.js";
import { createKeyboard } from "./create-keyboard.js";
import { getLanguage } from "./what-lang.js";

export function createPage(lang) {
   const container = createComponent('div', {
      className: 'container'
   });

   const title = createComponent('h1', {
      className: 'title',
      textContent: 'Virtual-keyboard'
   });

   const textarea = createComponent('textarea', {
      className: 'textarea',
      id: 'keytext',
      cols: '50',
      rows: '10'
   });

   const keyboardObject = createKeyboard(lang);

   const textOS = createComponent('p', {
      className: 'os',
      textContent: 'Keyboard made in Linux (windows) OS'
   });

   const textLang = createComponent('p', {
      className: 'lang',
      textContent: 'For change language - LeftShift+LeftAlt'
   });
   container.append(title, textarea, keyboardObject, textOS, textLang);
   document.body.append(container);
   // console.log('Funkziya vipolnilasy')
   return keyboardObject;
}