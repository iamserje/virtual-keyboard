export function getLanguage(ev) {
  const textarea = document.querySelector('.textarea');
  const rusLower = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
  const rusUpper = rusLower.toUpperCase();
  const enLower = 'abcdefghijklmnopqrstuvwxyz';
  const enUpper = enLower.toUpperCase();
  const rus = rusLower + rusUpper + '№';
  const en = enLower + enUpper + '@#$^';

  let language = 'en';

  if (rus.includes(ev.key)) {
    language = 'rus'
  };
  if (en.includes(ev.key)) {
    language = 'en'
  };
return language;
}

