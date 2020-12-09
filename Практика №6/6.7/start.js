let arr1 = [12, 15, 20, 25, 59, 79], result1 = 0;

for (let i = 0; i < arr1.length; i++)
    result1 += arr1[i];

alert(`Среднее арифметическое: ${Math.round(result1 / arr1.length)}`);

let a = 10, result2 = 1;

for (let i = 0; i < a; i++)
    result2 *= (i + 1);

alert(`Факториал: ${result2}`);