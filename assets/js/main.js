const form = document.querySelector('.formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);


    if (!peso) {
        setResultado('Peso Inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura Inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    let infoNumber = getInfoNumber(imc);
    const nivelImc = getInfoImc(infoNumber);
    const information = getShowInfo(infoNumber);


    function getImc(peso, altura) {
        const imc = peso / altura ** 2;
        return imc.toFixed(2)
    }

    const msg = `Seu imc é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
})

function getInfoNumber(imc) {

    if (imc >= 155.5) return infoNumber = 7 //nivel [7]
    if (imc >= 39.9) return infoNumber = 6 //nivel [6]
    if (imc >= 34.9) return infoNumber = 5 // nivel [5]
    if (imc >= 29.9) return infoNumber = 4 //nivel [4]
    if (imc >= 24.9) return infoNumber = 3 // nivel [3]
    if (imc >= 18.5) return infoNumber = 2 //nivel [2]
    if (imc >= 7.5) return infoNumber = 1 //nivel [1]
    if (imc < 7.5) return infoNumber = 0 //nivel [0]
}

function getInfoImc(infoNumber) {
    const nivel = ['Adulto mais leve do mundo', 'Abaixo do Peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3', 'Adulto mais pesado do mundo']

    if (infoNumber === 7) return nivel[7]
    if (infoNumber === 6) return nivel[6]
    if (infoNumber === 5) return nivel[5]
    if (infoNumber === 4) return nivel[4]
    if (infoNumber === 3) return nivel[3]
    if (infoNumber === 2) return nivel[2]
    if (infoNumber === 1) return nivel[1]
    if (infoNumber === 0) return nivel[0]
}

const maisLeve = document.querySelector('.mais-leve');
const abaixoPeso = document.querySelector('.abaixo-peso');
const pesoNormal = document.querySelector('.peso-normal');
const sobrepeso = document.querySelector('.sobrepeso');
const obesoUm = document.querySelector('.obeso1');
const obesoDois = document.querySelector('.obeso2');
const obesoTres = document.querySelector('.obeso3');
const maisPesado = document.querySelector('.mais-pesado');

function getShowInfo(infoNumber) {

    if (infoNumber === 7) return maisPesado.style.display = 'block'
    if (infoNumber === 6) return obesoTres.style.display = 'block'
    if (infoNumber === 5) return obesoDois.style.display = 'block'
    if (infoNumber === 4) return obesoUm.style.display = 'block'
    if (infoNumber === 3) return sobrepeso.style.display = 'block'
    if (infoNumber === 2) return pesoNormal.style.display = 'block'
    if (infoNumber === 1) return abaixoPeso.style.display = 'block'
    if (infoNumber === 0) return maisLeve.style.display = 'block'
}

function showInfo(information) {
    return information
}

function criaH() {
    const h = document.createElement('h2');
    return h;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const h = criaH();

    if (isValid) {
        h.classList.add('paragrafo-resultado');
    } else {
        h.classList.add('bad');
    }

    h.innerHTML = msg;
    resultado.appendChild(h);
}

const button = document.querySelector('button');
const result = document.querySelector('.result-wrapper');


button.addEventListener('click', function () {
    result.style.display = 'block'
    return;
})


result.addEventListener('click', function (e) {
    const classNameOfClickedElement = e.target.classList[0];
    const classNames = ['result-close', 'result-wrapper', 'result-link']
    const shouldCloseResult = classNames.some(className => className === classNameOfClickedElement)

    if (shouldCloseResult) {
        result.style.display = 'none'
        maisPesado.style.display = 'none'
        obesoTres.style.display = 'none'
        obesoDois.style.display = 'none'
        obesoUm.style.display = 'none'
        sobrepeso.style.display = 'none'
        pesoNormal.style.display = 'none'
        abaixoPeso.style.display = 'none'
        maisLeve.style.display = 'none'
    }
})