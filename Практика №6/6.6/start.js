let a = 10, b = 33;

alert(`Модуль разности: ${Math.abs(a - b)}`);

let c = (a - b) < 0 ? Math.abs(a - b) : a - b;

alert(`c = ${c}`);