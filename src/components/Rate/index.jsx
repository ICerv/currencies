import React, { useState, useEffect } from 'react';
import './style.css';

const currencies = {
  USD: { CZK: 23.823 },
  EUR: { CZK: 24.74 },
  GBP: { CZK: 29.067 }
};

const Rate = ({ from }) => {

  const [rate, setRate] = useState(currencies[from].CZK)

  useEffect(() => {
    const fetchRate = () => {
      fetch(`https://api.frankfurter.app/latest?from=${from}&to=CZK`)
        .then((response) => response.json())
        .then((data) => {
          const rate = data.rates.CZK;
          setRate(rate);
        })
    };

    fetchRate();
  }, [from]);


  return (
    <div className="rate">
      <div className="rate__currency">1 {from}</div>
      <div>=</div>
      <div className="rate__value">{rate} CZK</div>
    </div>
  );
};

export default Rate;
