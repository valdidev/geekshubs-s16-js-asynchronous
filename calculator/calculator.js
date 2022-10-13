const display = document.getElementById('display');
const buttons = Array.from(document.getElementById('buttons').children);

const calcular = (evento) => {
    
}

buttons.map((button) => {
    button.addEventListener('click', calcular)
});


