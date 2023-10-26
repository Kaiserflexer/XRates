import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">XRates</h1>
        <br></br>
      </header>
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-two-thirds"> {/* Измените ширину по вашему усмотрению */}
            <div className="box"> {/* Добавьте класс "box" для рамки */}
              <CurrencyConverter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
