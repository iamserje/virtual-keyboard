export function getLanguage() {
  const textarea = document.querySelector('.textarea');
  const rusLower = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
  const rusUpper = rusLower.toUpperCase();
  const enLower = 'abcdefghijklmnopqrstuvwxyz';
  const enUpper = enLower.toUpperCase();
  const rus = rusLower + rusUpper + '№';
  const en = enLower + enUpper + '@#$^';

  const getChar = (event) => String.fromCharCode(event.keyCode || event.charCode)

  textarea.addEventListener('keypress', function (e) {
    const char = getChar(e)
    if (rus.includes(char)) {
      return 'ru';
    } else if (en.includes(char)) {
      return 'en';
    } else {
      return 'ХЗ';
    }
  })
}