/*funciones del input de rango*/
const loanRangeValue = {
  minValue: document.querySelector('.calculate-loan-range').min,
  maxValue: document.querySelector('.calculate-loan-range').max,
  interestMinValue: document.querySelector('#calculate-interest-rate').min,
  interestMaxValue: document.querySelector('#calculate-interest-rate').max,
  periodsMinValue: document.querySelector('#calculate-periods').min,
  periodsMaxValue: document.querySelector('#calculate-periods').max,
}

/*campo para el valor minimo y maximo del prestamo*/
const { minValue } = loanRangeValue;
const { maxValue } = loanRangeValue;

const loanMinValueTag = document.getElementById('calculate-loan-min');
loanMinValueTag.innerHTML = minValue;

const loanMaxValueTag = document.getElementById('calculate-loan-max');
loanMaxValueTag.innerHTML = maxValue;

/*campo para la tasa de interes*/
const { interestMinValue } = loanRangeValue;
const { interestMaxValue } = loanRangeValue;

const interestMinValueTag = document.getElementById('interest-loan-min');
interestMinValueTag.innerHTML = interestMinValue;
const interestMaxValueTag = document.getElementById('interest-loan-max'); 
interestMaxValueTag.innerHTML = interestMaxValue;

/*campo para los periodos de amortizacion, parte del rango*/
const { periodsMinValue } = loanRangeValue;
const { periodsMaxValue } = loanRangeValue;
const periodsMinValueTag = document.getElementById('periods-loan-min');
periodsMinValueTag.innerHTML = periodsMinValue;

const periodsMaxValueTag = document.getElementById('periods-loan-max');
periodsMaxValueTag.innerHTML = periodsMaxValue;

/*Formulas de anualidades para el pago de una casa*/ 

let tablaAmortizacion = [];
let cuotaTotal = {};

function calculatePayment(P,n,i){
i =  i / 100;
A = Math.ceil(P *((i * Math.pow(1+i,n))/(Math.pow(1+i,n) - 1)));
/*montar la tabla de amortizacion*/
let periodo = -1;
let saldo = P;
let abono = 0;
let intereseDiferido  = 0;

for(k=0;k<=n;k++){
  if(periodo===0){
    abono = 0;
    intereseDiferido = 0;
    saldo = P;
  }
  periodo = periodo + 1;

  intereseDiferido = Math.round(saldo * i);

  abono = A - intereseDiferido;

  saldo = saldo - abono;
  
  cuotaTotal = {
    periodoCuota: periodo,
    interesAcumulado : intereseDiferido,
    abonoPorCuota: abono,
    saldoPorCuota: saldo
  }    

  tablaAmortizacion.push(cuotaTotal);
  if(saldo<0){
    cuotaTotal.saldoPorCuota = 0; 
    }
  }
}

calculatePayment(18000000,24,2);

console.log(tablaAmortizacion);

/*
//convertir el número a un formato de moneda para introducirlo en el DOM 
let cuotaString = A.toString();
let stringLastPosition = cuotaString.length + 3; 
let stringFirstPosition = cuotaString.length;
const arrayResult = [];
let emptyText = '';

for(let i=0;stringFirstPosition>0;i++){
  stringLastPosition = stringLastPosition - 3;
  stringFirstPosition = stringFirstPosition - 3;  
  const result = cuotaString.substring(stringFirstPosition,stringLastPosition);
  arrayResult.unshift('.',result);
}

aplicar una expresion regular en el primer caracter para poner el signo $ */ 
/*const patronInicial = /^[.]/;
let cifraCorregida = completeText.replace(patronInicial,'$');
//return cifraCorregida;

const completeText = emptyText.concat("",...arrayResult)
console.log(calculatePayment(18000000,24,2)); */


/*Code realed with chart.js*/ 

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Abono a capital', 'Intereses'],
        datasets: [{
            label: '# of Votes',
            data: [591679, 360000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    hoverOffset: 4
});


