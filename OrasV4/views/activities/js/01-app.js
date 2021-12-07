//Variables
const selecSemana = document.querySelector('#selectSemana')
const horaInicio = document.querySelector('#inicio')
const horaFin = document.querySelector('#fin')


//Objeto, que guardara los campos, seleccionados


//EventListener
document.addEventListener('DOMContentLoaded',() =>{

    selectSemana();//Datos Que se van a acargar
    selectInicio();
    selectFin();
});

function selectSemana(){
    semana.forEach(s => {
        const semanaHTML = document.createElement('option');
        semanaHTML.textContent = s;
        selecSemana.appendChild(semanaHTML)
        console.log(s)
    });
};

function selectInicio(){
    hora.forEach(h => {
        const horaHTML = document.createElement('option');
        horaHTML.textContent = h;
        horaInicio.appendChild(horaHTML)
    });
};

function selectFin(){
    horaF.forEach(h => {
        const horaFHTML = document.createElement('option');
        horaFHTML.textContent = h;
        horaFin.appendChild(horaFHTML)
    });
};

