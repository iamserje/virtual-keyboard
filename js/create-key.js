import { createComponent } from "./create-element.js";

export function createKey(clas = '', text = '') {
   const key = createComponent('div', {
      className: `keyboard__key`,
      textContent: text,
   });
   key.classList.add(clas);

   return key;
}