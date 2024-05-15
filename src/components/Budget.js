import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, budget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const value = parseInt(event.target.value);
        if (!isNaN(value) && value >= 0 && value <= 20000) {
            setNewBudget(value);
            dispatch({ type: 'SET_BUDGET', payload: value });
        } else {
            alert("Please enter a valid budget amount between 0 and 20000.");
            setNewBudget(budget);
        }
    };

    const increaseBudget = () => {
        const increasedBudget = newBudget + 10;
        if (increasedBudget <= 20000) {
            setNewBudget(increasedBudget);
            dispatch({ type: 'SET_BUDGET', payload: increasedBudget });
        } else {
            alert("Budget cannot exceed $20,000.");
        }
    };

    const decreaseBudget = () => {
        const decreasedBudget = newBudget - 10;
        const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
        if (decreasedBudget >= totalExpenses) {
            setNewBudget(decreasedBudget);
            dispatch({ type: 'SET_BUDGET', payload: decreasedBudget });
        } else {
            alert("Budget cannot be lower than total spending.");
        }
    };
    

    return (
        <div className='alert alert-secondary'>
            <span>Budget: ${budget}</span>
            <button onClick={decreaseBudget} style={{ marginLeft: '1rem' }}>-</button>
            <input
                type="number"
                step="10"
                min="0"
                max="20000"
                value={newBudget}
                onChange={handleBudgetChange}
                style={{ marginLeft: '1rem', width: '100px' }}
            />
            <button onClick={increaseBudget} style={{ marginLeft: '1rem' }}>+</button>
        </div>
    );
};

export default Budget;
