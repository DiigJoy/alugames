let jogosAlugados = 0;

function contarEExibirJogosAlugados(){
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}


function alterarStatus(id) {
    var gameElement = document.getElementById('game-' + id);


    if (gameElement) {
        // Verificar o estado atual do jogo (se está alugado ou não)
        var isRented = gameElement.querySelector('.dashboard__item__button').classList.contains('dashboard__item__button--return');

        // Alterar a aparência com base no estado atual
        if (isRented) {
            // Se está alugado, mudar para devolver
            if (confirm(`Você tem certeza que deseja devolver o jogo ${gameElement.textContent}?`)){
                gameElement.querySelector('.dashboard__item__button').classList.remove('dashboard__item__button--return');
                gameElement.querySelector('.dashboard__item__button').textContent = 'Alugar';}
                jogosAlugados--;
            
        } else {
            // Se não está alugado, mudar para alugar
            gameElement.querySelector('.dashboard__item__img').classList.add('dashboard__item__img--rented');
            gameElement.querySelector('.dashboard__item__button').classList.add('dashboard__item__button--return');
            gameElement.querySelector('.dashboard__item__button').textContent = 'Devolver';
            jogosAlugados++;
        }
    } else {
        console.error('Jogo não encontrado com o ID: ' + id);
    }

    contarEExibirJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function(){
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
})