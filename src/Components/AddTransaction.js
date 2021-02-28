import React, {useState, useContext} from 'react'
// import the global state
import { GlobalContext } from '../Context/GlobalState'

export default function AddTransaction() {
    const [description,setDescription]=  useState('');
    const [transactionAmount,setTransactionAmount]= useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

    const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        description,
        transactionAmount: +transactionAmount
    }
    addTransaction(newTransaction);
    }


    return (
        <>
            <h3>Add New Transaction</h3>
            <form onsubmit = {onSubmit}  >
                <div className="form-control">
                    <label htmlFor='description'>
                        Description
                    </label>
                    <input type="text"
                           placeholder="Enter Transaction Detail"
                           value={description}
                           onChange={(e)=> setDescription(e.target.value)}
                           required = "required"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor='transactionAmount'>
                        Transaction Amount
                    </label>
                    <input type="number"
                           placeholder="Enter Transaction Amount"
                           value={transactionAmount}
                           onChange={(e) => setTransactionAmount(e.target.value) }
                           required = "required"
                    />
                </div>
                <button className="btn"> 
                    Add Transaction
                </button>
            </form>
        </>
    )
}
