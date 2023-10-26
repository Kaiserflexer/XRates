# XRates - Currency Converter Web App
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
XRates is a simple and interactive web application for converting currencies. It provides real-time exchange rate data and allows users to easily convert between different currencies. This application is built using React and utilizes the Fixer API to fetch the latest exchange rate information.

## Features

- Convert between various currencies.
- Real-time exchange rate data.
- User-friendly and intuitive interface.
- Swap button for quick currency exchange.
- Stylish and responsive design.

## Demo

You can see a live demo of the XRates Currency Converter [here](#).

## Installation

To run XRates locally on your machine, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/xrates.git
   cd xrates
   npm start


## API Reference

#### Using fixer.io

```javascript
  const CurrencyConverter = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const accessKey = 'e2b3cf6042*****06aad3cf250414'; // Your API key
  const baseUrl = 'http://data.fixer.io/api/';
  const [amount, setAmount] = useState(1); // Amount to be converted
  const [baseCurrency, setBaseCurrency] = useState('USD'); // Base currency
  const [targetCurrency, setTargetCurrency] = useState('USD'); // Target currency
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [showResult, setShowResult] = useState(false); // Status to be displayed

```

| API Endpoint | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `http://data.fixer.io/api/` | `const accessKey` | **Required**. Your API key |

#### Using exchangeratesapi.io


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `http://api.exchangeratesapi.io/v1/latest`      | `const accessKey` | **Required**. Your API key |







