let a= Math.sqrt(379, 2);

alert(`До целых: ${Math.round(a)}\nДо десятых: ${a.toFixed(1)}\nДо cотых: ${a.toFixed(a)}`);

let b = Math.sqrt(587, 2);

let obj = { 'floor': Math.floor(b), 'ceil': Math.ceil(b) };

alert(`В меньшую сторону: ${obj['floor']}\nВ большую сторону: ${obj['ceil']}`);