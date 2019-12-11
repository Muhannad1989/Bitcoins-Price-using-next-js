import React, { useState } from 'react';

const Prices = ({ bpi }) => {
  let [currency, setCurrency] = useState('USD');
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          Bitcoin rate for {bpi[currency].description}:{' '}
          <span className="badge badge-primary">{bpi[currency].code}</span>{' '}
          <strong>{bpi[currency].rate}</strong>
        </li>
      </ul>
      <div>
        <form>
          <select
            className="form-control"
            onChange={e => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
          </select>
        </form>
      </div>
      <style>f</style>
    </div>
  );
};

export default Prices;
