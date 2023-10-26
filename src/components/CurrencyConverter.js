import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MaterialIcon from 'material-icons-react';
import './CurrencyConverter.css';

const CurrencyConverter = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const accessKey = 'e2b3cf60428d850bf506aad3cf250414'; // Используйте ваш API ключ
  const baseUrl = 'http://api.exchangeratesapi.io/v1/latest';
  const [amount, setAmount] = useState(1); // Сумма для конвертации
  const [baseCurrency, setBaseCurrency] = useState('USD'); // Базовая валюта
  const [targetCurrency, setTargetCurrency] = useState('USD'); // Целевая валюта
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [showResult, setShowResult] = useState(false); // Состояние для отображения результата

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(`${baseUrl}?access_key=${accessKey}`);
        setExchangeRates(response.data.rates);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeRates();
  }, []);

  const handleConvert = () => {
    if (exchangeRates[baseCurrency] && exchangeRates[targetCurrency]) {
      const conversionRate = exchangeRates[targetCurrency] / exchangeRates[baseCurrency];
      setConvertedAmount((amount * conversionRate).toFixed(2));
      setShowResult(true); // Показать результат после нажатия на кнопку
    }
  };

  const handleSwapCurrencies = () => {
    // Обмен базовой и целевой валюты местами
    const temp = baseCurrency;
    setBaseCurrency(targetCurrency);
    setTargetCurrency(temp);
  };

  return (
    <div className="container">
      <h2 className="title">Currency Converter</h2>
      <div className="converter-form">
        <div className="field">
          <label className="label">Amount:</label>
          <div className="control">
            <input
              type="number"
              className="input"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">From:</label>
          <div className="control">
            <div className="select">
              <select
                className="select-input"
                value={baseCurrency}
                onChange={(e) => setBaseCurrency(e.target.value)}
              >
                {Object.keys(exchangeRates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="field swap-icon is-flex is-justify-content-center">
          <button className="button is-outlined" onClick={handleSwapCurrencies}>
            <MaterialIcon icon="swap_horiz" />
          </button>
        </div>
        <div className="field">
          <label className="label">To:</label>
          <div className="control">
            <div className="select">
              <select
                className="select-input"
                value={targetCurrency}
                onChange={(e) => setTargetCurrency(e.target.value)}
              >
                {Object.keys(exchangeRates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-link is-active" onClick={handleConvert}>
              CONVERT
            </button>
          </div>
        </div>
        {showResult && (
  <div className="has-background-info-light"> {/* Добавляем фон */}
    <p className="result-text">
      <span className="is-large-number">{amount} {baseCurrency}</span> is approximately
      <span className="is-large-number"> {convertedAmount} {targetCurrency}</span>
    </p>
  </div>
)}
      </div>
    </div>
  );
};

export default CurrencyConverter;
