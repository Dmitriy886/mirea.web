let n = 1000, num = 0;

while (n >= 50) {
    n /= 2;
    num++;
}

alert(`Результат деления: ${n}, кол-во итераций: ${num}`);
