import { createComponent } from "./create-element.js";

export function createKey(clas = '', text = '') {
   const key = createComponent('div', {
      className: `keyboard__key${clas}`,
      textContent: text,
   });
   return key;
}