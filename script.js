const containerCards = document.getElementById('carrossel-cards');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const bntCor = document.getElementById('btn-tema');
const tamanhoRolagem = 320;
 
btnNext.addEventListener('click', function() {
    containerCards.scrollBy({
        left: tamanhoRolagem,
        behavior: 'smooth'
    });
});
 
btnPrev.addEventListener('click', function() {
    containerCards.scrollBy({
        left: -tamanhoRolagem,
        behavior: 'smooth'
    });
});
 
bntCor.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        bntCor.innerText = '☀️Claro';
    } else {
        bntCor.innerText = '🌙Escuro';
    }
});

const bntValor = document.getElementById('btn-calcular');
const selectDestino = document.getElementById('destino');
const inputCheckin = document.getElementById('checkin');
const inputCheckout = document.getElementById('checkout');
const spanDiaria = document.getElementById('valor-diaria');
const spanDias = document.getElementById('qtd-dias');
const spanTotal = document.getElementById('valor-total');

if (selectDestino) {
    selectDestino.addEventListener('change', function() {
        if (selectDestino.value) {
            spanDiaria.innerText = 'R$ ' + Number(selectDestino.value).toFixed(2).replace('.', ',');
        } else {
            spanDiaria.innerText = 'R$ 0,00';
        }
    });
}
 
if (bntValor) {
    bntValor.addEventListener('click', function() {
        if (!selectDestino.value) {
            alert('Por favor, selecione um destino!');
            return;
        }
        if (!inputCheckin.value || !inputCheckout.value) {
            alert('Por favor, preencha as duas datas!');
            return;
        }
 
        const dataEntrada = new Date(inputCheckin.value + 'T00:00:00');
        const dataSaida = new Date(inputCheckout.value + 'T00:00:00');
 
        if (dataSaida <= dataEntrada) {
            alert('A data de saída precisa ser depois da data de entrada!');
            return;
        }
 
        const diferencaMs = dataSaida - dataEntrada;
        const diasTotais = Math.round(diferencaMs / (1000 * 60 * 60 * 24));
 
        const valorDiaria = Number(selectDestino.value);
        const valorTotal = diasTotais * valorDiaria;
 
        spanDias.innerText = diasTotais;
        spanTotal.innerText = 'R$ ' + valorTotal.toFixed(2).replace('.', ',');
    });
}

