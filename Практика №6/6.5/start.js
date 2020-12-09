let arr = [];

for (let i = 0; i < 10; i++) {
    arr.push(Math.round(Math.random() * (10 - 1) + 1));
}

alert(`Случайное число: ${Math.round(Math.random() * (100 - 1) + 1)}\nМассив из случайных чисел: ${arr}`);