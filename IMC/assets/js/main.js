// Capturar evento de submit do formulário
const form = document.querySelector("#form")
const peso = document.querySelector("#peso")
const altura = document.querySelector("#altura")
const res = document.querySelector("#res")

form.addEventListener("submit", function (e) {
    e.preventDefault()
})

function IMC() {
    var p = Number(peso.value)
    var a = Number(altura.value)
    var imc = p / Math.pow(a, 2)
    if (imc < 18.5) {
        res.innerHTML = `Com um IMC de ${imc.toFixed(1)} kg/m<sup>2</sup> você estar <strong>ABAIXO DO PESO</strong>`
    } else if (imc >= 18.5 && imc <= 24.9) {
        res.innerHTML = `Com um IMC de ${imc.toFixed(1)} kg/m<sup>2</sup> você estar <strong>PESO NORMAL</strong>`
    } else if (imc >= 25 && imc <= 29.9) {
        res.innerHTML = `Com um IMC de ${imc.toFixed(1)} kg/m<sup>2</sup> você estar <strong>SOBREPESO</strong>`
    } else if (imc >= 30 && imc <= 34.9) {
        res.innerHTML = `Com um IMC de ${imc.toFixed(1)} kg/m<sup>2</sup> você estar <strong>OBESIDADE GRAU I</strong>`
    } else if (imc >= 35 && imc <= 39.9) {
        res.innerHTML = `Com um IMC de ${imc.toFixed(1)} kg/m<sup>2</sup> você estar <strong>OBESIDADE GRAU II</strong>`
    } else if (imc >= 40){
        res.innerHTML = `<p>Com um IMC de ${imc.toFixed(1)} kg/m<sup>2</sup> você estar <strong>OBESIDADE GRAU III OU MÓRBIDA</strong></p>`
    }
}