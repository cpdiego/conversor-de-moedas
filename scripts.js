const botaoConverter = document.querySelector('.botao-converter')
const converterDe = document.querySelector('.converter-de')
const converterPara = document.querySelector('.converter-para')

async function converterValores() {
  const valorConversao = document.querySelector('.valor-conversao').value
  const valorConverter = document.querySelector('.valor-converter')
  const valorConvertido = document.querySelector('.valor-convertido')

  const dataReal = await fetch(
    'https://economia.awesomeapi.com.br/last/BRL-USD,BRL-EUR,BRL-GBP',
  ).then((response) => response.json())

  const dataDolar = await fetch(
    'https://economia.awesomeapi.com.br/last/USD-BRL,USD-EUR,USD-GBP',
  ).then((response) => response.json())

  const dataEuro = await fetch(
    'https://economia.awesomeapi.com.br/last/EUR-BRL,EUR-USD,EUR-GBP',
  ).then((response) => response.json())

  const dataLibra = await fetch(
    'https://economia.awesomeapi.com.br/last/GBP-BRL,GBP-USD,GBP-EUR',
  ).then((response) => response.json())

  const realDolar = dataReal.BRLUSD.bid
  const realEuro = dataReal.BRLEUR.bid
  const realLibra = dataReal.BRLGBP.bid

  const dolarReal = dataDolar.USDBRL.bid
  const dolarEuro = dataDolar.USDEUR.bid
  const dolarLibra = dataDolar.USDGBP.bid

  const euroReal = dataEuro.EURBRL.bid
  const euroDolar = dataEuro.EURUSD.bid
  const euroLibra = dataEuro.EURGBP.bid

  const libraReal = dataLibra.GBPBRL.bid
  const libraDolar = dataLibra.GBPUSD.bid
  const libraEuro = dataLibra.GBPEUR.bid

  if (converterDe.value === 'real-de') {
    valorConverter.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valorConversao)
  }

  if (converterDe.value === 'dolar-de') {
    valorConverter.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(valorConversao)
  }

  if (converterDe.value === 'euro-de') {
    valorConverter.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(valorConversao)
  }

  if (converterDe.value === 'libra-de') {
    valorConverter.innerHTML = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
    }).format(valorConversao)
  }

  // CONVERTENDO REAL em OUTRAS MOEDAS
  if (converterDe.value === 'real-de') {
    if (converterPara.value === 'real-para') {
      valorConvertido.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(valorConversao)
    }

    if (converterPara.value === 'dolar-para') {
      valorConvertido.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(valorConversao * realDolar)
    }

    if (converterPara.value === 'euro-para') {
      valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
      }).format(valorConversao * realEuro)
    }

    if (converterPara.value === 'libra-para') {
      valorConvertido.innerHTML = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
      }).format(valorConversao * realLibra)
    }
  }

  // CONVERTENDO DÓLAR em OUTRAS MOEDAS
  if (converterDe.value === 'dolar-de') {
    if (converterPara.value === 'dolar-para') {
      valorConvertido.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(valorConversao)
    }

    if (converterPara.value === 'real-para') {
      valorConvertido.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(valorConversao * dolarReal)
    }

    if (converterPara.value === 'euro-para') {
      valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
      }).format(valorConversao * dolarEuro)
    }

    if (converterPara.value === 'libra-para') {
      valorConvertido.innerHTML = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
      }).format(valorConversao * dolarLibra)
    }
  }

  // CONVERTENDO EURO em OUTRAS MOEDAS
  if (converterDe.value === 'euro-de') {
    if (converterPara.value === 'euro-para') {
      valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
      }).format(valorConversao)
    }

    if (converterPara.value === 'real-para') {
      valorConvertido.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(valorConversao * euroReal)
    }

    if (converterPara.value === 'dolar-para') {
      valorConvertido.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(valorConversao * euroDolar)
    }

    if (converterPara.value === 'libra-para') {
      valorConvertido.innerHTML = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
      }).format(valorConversao * euroLibra)
    }
  }

  // CONVERTENDO LIBRA em OUTRAS MOEDAS
  if (converterDe.value === 'libra-de') {
    if (converterPara.value === 'libra-para') {
      valorConvertido.innerHTML = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
      }).format(valorConversao)
    }

    if (converterPara.value === 'real-para') {
      valorConvertido.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(valorConversao * libraReal)
    }

    if (converterPara.value === 'dolar-para') {
      valorConvertido.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(valorConversao * libraDolar)
    }

    if (converterPara.value === 'euro-para') {
      valorConvertido.innerHTML = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
      }).format(valorConversao * libraEuro)
    }
  }
}

function trocarMoeda() {
  const trocarNomeDe = document.querySelector('.moeda-de')
  const logoMoedaDe = document.querySelector('.logo-moeda-de')
  const trocarNomePara = document.querySelector('.moeda-para')
  const logoMoedaPara = document.querySelector('.logo-moeda-para')

  if (converterDe.value === 'real-de') {
    trocarNomeDe.innerHTML = 'Real'
    logoMoedaDe.src = './assets/real.png'
  }

  if (converterDe.value === 'dolar-de') {
    trocarNomeDe.innerHTML = 'Dólar Americano'
    logoMoedaDe.src = './assets/dolar.png'
  }

  if (converterDe.value === 'euro-de') {
    trocarNomeDe.innerHTML = 'Euro'
    logoMoedaDe.src = './assets/euro.png'
  }

  if (converterDe.value === 'libra-de') {
    trocarNomeDe.innerHTML = 'Libra'
    logoMoedaDe.src = './assets/libra.png'
  }

  if (converterPara.value === 'dolar-para') {
    trocarNomePara.innerHTML = 'Dólar Americano'
    logoMoedaPara.src = './assets/dolar.png'
  }

  if (converterPara.value === 'real-para') {
    trocarNomePara.innerHTML = 'Real'
    logoMoedaPara.src = './assets/real.png'
  }

  if (converterPara.value === 'euro-para') {
    trocarNomePara.innerHTML = 'Euro'
    logoMoedaPara.src = './assets/euro.png'
  }

  if (converterPara.value === 'libra-para') {
    trocarNomePara.innerHTML = 'Libra'
    logoMoedaPara.src = './assets/libra.png'
  }

  converterValores()
}

converterDe.addEventListener('change', trocarMoeda)
converterPara.addEventListener('change', trocarMoeda)
botaoConverter.addEventListener('click', converterValores)
