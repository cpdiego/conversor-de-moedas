const convertButton = document.querySelector('.convert-button')
const currencyToConverted = document.querySelector('.currency-to-converted')

function convertValues() {
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert') // Valor em Real
    const currencyValueConverted = document.querySelector('.currency-value-converted') // Outras moedas

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.0

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(inputCurrencyValue)

    if (currencyToConverted.value == 'dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencyToConverted.value == 'euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencyToConverted.value == 'libra') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
        }).format(inputCurrencyValue / libraToday)
    }
}

function changeCurrency() {
    const currencyName = document.querySelector('.currency-name')
    const currencyImage = document.querySelector('.currency-converted')

    if (currencyToConverted.value == 'dolar') {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImage.src = './assets/dolar.png'
    }

    if (currencyToConverted.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/euro.png'
    }

    if (currencyToConverted.value == 'libra') {
        currencyName.innerHTML = 'Libra'
        currencyImage.src = './assets/libra.png'
    }

    convertValues()
}

currencyToConverted.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)