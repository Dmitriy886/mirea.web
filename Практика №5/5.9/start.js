let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];

alert(arr[1][0]);

let obj = { js:['jQuery', 'Angular'], php: 'hello', css: 'world' };

alert(obj.js[0]);

let week = {
    'ru': ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
    'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday']
};

alert(week['ru'][0]);
alert(week['en'][2]);

let lang = 'en', day = 5;

let weekLang = {
    'ru': ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
    'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday']
};

alert(weekLang[lang][day - 1]);
