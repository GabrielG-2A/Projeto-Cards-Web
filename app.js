function criaCartao (categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let card = document.createElement('article')
    card.className = 'card'


    card.className = `
    <article class="card">
    <div class="card-inner">
        <div class="card-front">
            <div>
                <h2>${categoria}</h2>
                <p>${pergunta}</p>
            </div>
        </div>
        <div class="card-back">
            <div>
                <h2>${categoria}</h2>
                <p>${resposta}</p>
            </div>
        </div>
    </div>
    </article>
    `
    container.appendChild(card)
}







