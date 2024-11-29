const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('from_currency');
const toCurrency = document.getElementById('to_currency');
const convertButton = document.getElementById('convert');
const resultElement = document.getElementById('result');

const exchangeRates = {
	USD: {
		EUR: 0.95,
		GBP: 0.79,
		INR: 84.56,
		// Add more exchange rates
	},
	EUR: {
		USD: 1.06,
		GBP: 0.83,
		INR: 89.45,
		// Add more exchange rates
	},
	GBP: {
		USD: 1.27,
		EUR: 1.20,
		INR: 107.67,
		// Add more exchange rates
	},
    INR: {
		USD: 0.012,
		EUR: 0.011,
		GBP: 0.0093,
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

