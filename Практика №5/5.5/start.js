alert(`Кол-во секунд в часе: ${60 * 60}\nКол-во секунд в сутках: ${60 * 60 * 24}\nКол-во секунд в месяце: ${60 * 60 * 24 * 30}`)

let seconds = (new Date()).getSeconds();
let minutes = (new Date()).getMinutes();
let hours = (new Date()).getHours();

alert(`${hours}:${minutes}:${seconds}`);

let num = 228;

num = Math.pow(num, 2);
alert(num);
