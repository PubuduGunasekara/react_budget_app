import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
    const remainingBudget = budget - totalExpenses;
    const alertType = remainingBudget < 0 ? 'alert-danger' : 'alert-success';
    
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: ${remainingBudget}</span>
        </div>
    );
};

export default Remaining;
