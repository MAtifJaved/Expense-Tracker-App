import React, {useContext} from 'react'

import { GlobalContext } from '../Context/GlobalState'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    /* javaScript Array Reduce Function is being used here to add the values in transactions Array and to show
    it in Balance Component */
    /* Moreover JavaScript Number Function ".toFixed" is being used to fix the decimal places here  */

    const amounts = transactions.map(transaction => transaction.transactionAmount);
    const sum = amounts.reduce((accumulator,currentTransactionValue) => (accumulator += currentTransactionValue) , 0).toFixed(2); 


    return (
        <div>
            <h4>Current Balance</h4>
            <h1>${sum}</h1>
        </div>
    )
}

