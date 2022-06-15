const res = document.querySelector("#res")
const n1 = document.querySelector("#nota1")
const n2 = document.querySelector("#nota2")
const rep = document.querySelector("#reprovado").innerHTML
const rec = document.querySelector("#recuperacao").innerHTML
const apr = document.querySelector("#aprovado").innerHTML

form.addEventListener("submit", function (e) {
    e.preventDefault()
})

function calcMedia() {
    var nota01 = Number(n1.value)
    var nota02 = Number(n2.value)
    var media = (nota01 + nota02) / 2

    if (media < 3) {
        res.innerHTML = `Com as seguintes notas ${nota01} e ${nota02} a média ficou de ${media} situação: ${rep}`
    } else if (media >= 3 && media < 6) {
        res.innerHTML = `Com as seguintes notas ${nota01} e ${nota02} a média ficou de ${media} situação: ${rec}`
    } else {
        res.innerHTML = `Com as seguintes notas ${nota01} e ${nota02} a média ficou de ${media} situação: ${apr}`
    }
}