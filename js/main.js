/* const operation = (onFinish) => {
    const result = " result";
    onFinish(result);
}

/////////////////////

const showResult = (res) => {
    console.log("he acabado " + res);
}

const storageResult = (value) => {
    localStorage.setItem('result', value);
}

///////////////////

operation(storageResult); */

////////////////////////////////////////////

/* 
// DIFERENCIA ENTRE NÚMERO DE PARÁMETROS Y ARGUMENTOS

const anExample = (param1, param2) => {
    let resultado = param1 + param2;
    console.log(resultado)
}

anExample(1)
anExample(1,2)
// ignora los argumentos de más, no puestos en parámetro
anExample(1,2,3) 
*/

/* const operation = (onFinish) => {
    timeout = 0;
    const result = "???"
    timeout = timeout + loquetardo;
}

addEventListener('click', () => {})

const timeoutId = setTimeout(() => {}, 1000)
console.log(timeoutId)
// clearTimeout(timeoutId); */

/*
 setInterval() 
cuidado con el Snow Ball effect
*/

const resultado = document.getElementById('resultado');

document.querySelector("#sumar").addEventListener('click', () => {
    let a = parseInt(document.querySelector("#a").value),
        b = parseInt(document.querySelector("#b").value);

    setTimeout(() => {
        resultado.innerHTML = 'El resultado es ' + (a + b);
    },1000)
})

document.querySelector("#restar").addEventListener('click', () => {
    let a = parseInt(document.querySelector("#a").value),
        b = parseInt(document.querySelector("#b").value);

    setTimeout(() => {
        resultado.innerHTML = 'El resultado es ' + (a - b);
    },1000)
})

document.querySelector("#multiplicar").addEventListener('click', () => {
    let a = parseInt(document.querySelector("#a").value),
        b = parseInt(document.querySelector("#b").value);

    setTimeout(() => {
        resultado.innerHTML = 'El resultado es ' + (a * b);
    },1000)
})

document.querySelector("#dividir").addEventListener('click', () => {
    let a = parseInt(document.querySelector("#a").value),
        b = parseInt(document.querySelector("#b").value);

    setTimeout(() => {
        resultado.innerHTML = 'El resultado es ' + (a / b);
    },1000)
})

document.querySelector("#elevar").addEventListener('click', () => {
    let a = parseInt(document.querySelector("#a").value),
        b = parseInt(document.querySelector("#b").value);

    setTimeout(() => {
        resultado.innerHTML = 'El resultado es ' + (a ** b);
    },1000)
})

document.querySelector("#raiz").addEventListener('click', () => {
    let a = parseInt(document.querySelector("#a").value),
        b = parseInt(document.querySelector("#b").value);

    setTimeout(() => {
        resultado.innerHTML = 'El resultado es ' + (Math.sqrt(a));
        resultado.innerHTML = 'El resultado es ' + (Math.sqrt(b));
    },1000)
})

