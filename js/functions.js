function checkStringLength(textToValidate, maxLength) {
  return textToValidate.length <= maxLength;
}
// Строка короче 20 символов
checkStringLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkStringLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkStringLength('проверяемая строка', 10); // false

function isPalindrom(string){
  const cleaned = string.toLowerCase().replaceAll(' ', '');

  const reversed = cleaned.splint('').reversed().join('');

  return cleaned === reversed;
}

// Строка является палиндромом
isPalindrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrom('ДовОд'); // true
// Это не палиндром
isPalindrom('Кекс'); // false
isPalindrom('Лёша на полке клопа нашёл '); // true
