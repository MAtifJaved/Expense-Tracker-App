import React, {useContext} from 'react'

import { GlobalContext } from '../Context/GlobalState'

export const AccountSummary = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount)

    const income = amounts
    .filter(currentTransactionValue => currentTransactionValue > 0)
    .reduce((sum,currentTransactionValue) => (sum += currentTransactionValue), 0 )
    .toFixed(2)

    const expense =amounts
    .filter(currentTransactionValue => currentTransactionValue < 0)
    .reduce((sum,currentTransactionValue) => (sum += currentTransactionValue * -1)  ,0)
    .toFixed(2)

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">
                    {income}
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">
                    {expense}
                </p>
            </div>
        </div>
    )
}

