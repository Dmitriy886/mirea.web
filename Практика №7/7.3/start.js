document.body.addEventListener("click", function (event) {
    if (event.target.id != 'textarea') {
        document.getElementById('textarea').value = "Съешь ещё этих мягких французских булок";
    }
});

function changeText(context) {
    context.value = 'да выпей чаю';
}

function getInactive(context) {
    context.disabled = true;
}

document.getElementById('button №2').onclick = function() { 
    document.getElementById('button №1').disabled = false; 
};

function getClick(context) {
    context.innerHTML = parseInt(context.innerHTML) + 1;
}