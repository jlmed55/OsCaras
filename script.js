function calcular() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);

    const resultSoma = num1 + num2;
    const resultSub = num1 - num2;
    const resultMult = num1 * num2;
    let resultDiv;
    if (num2 === 0) {
        resultDiv = 'Não divisivel por zero!'
    } else {
        resultDiv = num1 / num2;
    }

    const soma = document.getElementById('soma');
    const sub = document.getElementById('sub');
    const mult = document.getElementById('mult');
    const div = document.getElementById('div');


    soma.innerHTML = `<p> resultado da soma ${resultSoma}</p> `
    sub.innerHTML = `<p> resultado da subitração ${resultSub}</p> `
    mult.innerHTML = `<p> resultado  da multiplicação ${resultMult}</p> `
    div.innerHTML = `<p> resultado  da divisão é ${resultDiv}</p> `

}

function calcularMedia() {
    const n1 = Number(document.getElementById('n1').value);
    const n2 = Number(document.getElementById('n2').value);
    const n3 = Number(document.getElementById('n3').value);
    const n4 = Number(document.getElementById('n4').value);
    const freq = Number(document.getElementById('freq').value);

    const media = (n1 + n2 + n3 + n4) / 4;

    const result = document.getElementById('result');
    const freqResult = document.getElementById('frequencia');
    const situacaoResult = document.getElementById('situacao')

    result.innerHTML = `<p> Sua média É ${media}</p>`
    const situacao = VerificarAprovacao(media, freq);
    freqResult.innerHTML = `<p> Sua frequecia É ${freq}  e sua situaçãon é ${situacao} </p>`
}
function VerificarAprovacao(media, freq) {
    if (freq >= 75 && media > 6) {
        console.log("Aprovado");
        return "aprovado";
    } else if (freq < 75 && media < 5) {
        console.log("reprovado");
        return "reprovado";
    } else if (media >= 5 && media < 6 && freq >= 75) {
        console.log("exame");
        return "exame";
    } else {
        return "reprovadoS";
    }
}