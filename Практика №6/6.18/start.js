let arr = [1, 2, 3, 4, 5];

arr.splice(1, 2);

alert(arr);

let newArr = arr.splice(1, 3);

alert(newArr);

arr.splice(3, 0, 'a', 'b', 'c');

alert(arr);

arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c');
arr.splice(8, 0, 'e');

alert(arr);