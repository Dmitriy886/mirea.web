let i = 0;

while (i < 100) {
    alert(i + 1);
    i++;
}

for (let j = 0; j < 100; j++)
    alert(j + 1);


let a = 11;

while (a <= 33) {
    alert(a);
    a++;
}
    
for (let b = 11; b <= 33; b++) 
    alert(b);


let c = 0;

while (c < 100) {
    if (!((c + 1) % 2)) alert(c + 1);
    c++;
}

for (let d = 0; d < 100; d++) {
    if (!((d + 1) % 2)) alert(d + 1);
}


let x = 0, sumX = 0;

while (x < 100) {
    sumX += (x + 1);
    x++;
}

let sumY = 0;

for (let y = 0; y < 100; y++)
    sumY += (y + 1);

alert(sumX);
alert(sumY);
