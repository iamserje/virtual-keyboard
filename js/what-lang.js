
  const textarea = document.querySelector('.textarea');
  const rusLower = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
  const rusUpper = rusLower.toUpperCase();
  const enLower = 'abcdefghijklmnopqrstuvwxyz';
  const enUpper = enLower.toUpperCase();
  const rus = rusLower + rusUpper + '№';
  const en = enLower + enUpper + '@#$^';

export let getLanguage = 'en';
window.addEventListener('keypress', function(e) {

  if (rus.includes(e.key)) {
    getLanguage = 'rus'
  };
  if (en.includes(e.key)) {
    getLanguage = 'en'
  };
  console.log('1', getLanguage);
});


