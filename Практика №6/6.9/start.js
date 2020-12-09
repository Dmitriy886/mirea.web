let str1 = 'я учу javascript!';

alert('Количество символов: ' + str1.length);
alert('substr: ' + str1.substr(2, 3) + " " + str1.substr(6, 10));
alert('substring: ' + str1.substring(2, 5) + " " + str1.substring(6, 16));
alert('slice: ' + str1.slice(2, 5) + " " + str1.slice(6, 16));
alert('Позиция подстроки: ' + str1.indexOf('учу'));

let str2 = 'Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст';
let n = 11, result = '';

if (str2.length > 11) {
    result = `${str2.substr(0, 11)}...`;
}
else {
    result = str2;
}

alert(result);