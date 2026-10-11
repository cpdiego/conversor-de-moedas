const botaoConverter = document.querySelector('.botao-converter')
//const converterDe = document.querySelector('.converter-de')
const converterPara = document.querySelector('.converter-para')

async function converterValores() {
  const valorConversao = document.querySelector('.valor-conversao').value
  const valorConverter = document.querySelector('.valor-converter')
  const valorConvertido = document.querySelector('.valor-convertido')

  const dataReal = await fetch(
    'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL',
  ).then((response) => response.json())

  const realDolar = dataReal.USDBRL.bid
  const realEuro = dataReal.EURBRL.bid
  const realLibra = dataReal.GBPBRL.bid

  valorConverter.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valorConversao)

  if (converterPara.value == 'dolar-para') {
    valorConvertido.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(valorConversao / realDolar)
  }

  if (converterPara.value == 'euro-para') {
    valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(valorConversao / realEuro)
  }

  if (converterPara.value == 'libra-para') {
    valorConvertido.innerHTML = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
    }).format(valorConversao / realLibra)
  }
}

function trocarMoeda() {
  const trocarNomePara = document.querySelector('.moeda-para')
  const logoMoedaPara = document.querySelector('.logo-moeda-para')

  if (converterPara.value == 'dolar-para') {
    trocarNomePara.innerHTML = 'Dólar Americano'
    logoMoedaPara.src = './assets/dolar.png'
  }

  if (converterPara.value == 'euro-para') {
    trocarNomePara.innerHTML = 'Euro'
    logoMoedaPara.src = './assets/euro.png'
  }

  if (converterPara.value == 'libra-para') {
    trocarNomePara.innerHTML = 'Libra'
    logoMoedaPara.src = './assets/libra.png'
  }

  converterValores()
}

converterPara.addEventListener('change', trocarMoeda)
botaoConverter.addEventListener('click', converterValores)
