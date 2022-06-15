const res = document.querySelector("#res")
const p1 = document.querySelector("#price1")
const p2 = document.querySelector("#price2")

form.addEventListener("submit", function (e) {
    e.preventDefault()
})

function brazil (numero) {
    return numero.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
}

function verificar() {
    let atual = Number(p1.value)
    let novo = Number(p2.value)
    res.innerHTML = `<p>O produto custava ${brazil(atual)} e agora custa ${brazil(novo)}</p>`
    if (atual < novo) {
        let diferenca = novo - atual
        let variacao = ((diferenca) * 100) / atual
        res.innerHTML = `O produto custava ${brazil(atual)} e agora custa ${brazil(novo)}`                                   
        res.innerHTML += `<p>Hoje o produto estar mais caro</p>`
        res.innerHTML += `<p>O preço subiu ${brazil(diferenca)} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${variacao.toFixed(2)}% para cima</p>`
    } else {
        let diferenca = atual - novo
        let variacao = ((diferenca) * 100) / novo
        res.innerHTML = `O produto custava ${brazil(atual)} e agora custa ${brazil(novo)}`
        res.innerHTML += `<p>Hoje o produto estar mais barato</p>`
        res.innerHTML += `<p>O preço caiu ${brazil(diferenca)} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${variacao.toFixed(2)}% para baixo</p>`
    }
} 