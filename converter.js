const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('from_currency');
const toCurrency = document.getElementById('to_currency');
const convertButton = document.getElementById('convert');
const resultElement = document.getElementById('result');

const exchangeRates = {
	USD: {
		EUR: 0.88,
		GBP: 0.76,
		INR: 74.83,
		// Add more exchange rates
	},
	EUR: {
		USD: 1.13,
		GBP: 0.86,
		INR: 84.81,
		// Add more exchange rates
	},
	GBP: {
		USD: 1.31,
		EUR: 1.16,
		INR: 98.41,
		// Add more exchange rates
	},
    INR: {
		USD: 0.013,
		EUR: 0.012,
		GBP: 0.010,
		// Add more exchange rates
	},
	// Add more currencies
};

convertButton.addEventListener('click', () => {
	const amount = parseFloat(amountInput.value);
	const from = fromCurrency.value;
	const to = toCurrency.value;
    if (amount && exchangeRates[from] && exchangeRates[from][to]) {
		const exchangeRate = exchangeRates[from][to];
		const result = amount * exchangeRate;
		
		resultElement.textContent = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
	} else {
		resultElement.textContent = 'Invalid input or exchange rate not found';
	}
});

