import { createComponent } from "./create-element.js";
import { createKeyboard } from "./create-keyboard.js";

export function createPage() {
   document.body.innerHTML = '';
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
   const keyboardWrapper = createComponent('div', {
      className: 'keyboard-wrapper',
   });
   container.append(title, textarea, keyboardWrapper);
   document.body.append(container);
}
export function renderKeyboard(lang, layout) {
   if (document.querySelector('.keyboard-wrapper').innerHTML) {
   document.querySelector('.keyboard-wrapper').innerHTML = '';
}

   const keyboardObject = createKeyboard(lang, layout);

   const textOS = createComponent('p', {
      className: 'os',
      textContent: 'Keyboard made in Linux (windows) OS'
   });

   const textLang = createComponent('p', {
      className: 'lang',
      textContent: 'For change language - LeftShift+LeftAlt'
   });
   document.querySelector('.keyboard-wrapper').append(keyboardObject, textOS, textLang);
   // console.log('Funkziya vipolnilasy')
   return keyboardObject;
}