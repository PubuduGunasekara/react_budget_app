import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {

    
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({ type: 'SET_CURRENCY', payload: event.target.value });
    };

    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="currencySelector">Currency</label>
            </div>
            <select className="custom-select" id="currencySelector" value={currency} onChange={handleCurrencyChange}>
                <option value="$">Dollar</option>
                <option value="£">Pound</option>
                <option value="€">Euro</option>
                <option value="₹">Ruppee</option>
            </select>
        </div>
    );
};

export default CurrencySelector;
