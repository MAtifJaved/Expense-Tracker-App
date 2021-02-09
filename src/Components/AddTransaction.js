import React, {useState} from 'react'

export default function AddTransaction() {
    const [description,setDescription]=  useState();
    const [transactionAmount,setTransactionAmount]= useState();


    return (
        <div>
            <h3>Add New Transaction</h3>
            <form className="form-control">
                <div>
                    <label htmlFor='description'>
                        Description
                    </label>
                    <input type="text"
                           id="description"
                           placeholder="Enter Transaction Detail"
                           value={description}
                           onChange={(e)=> setDescription(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor='transactionAmount'>
                        Transaction Amount
                    </label>
                    <input type="number"
                           id="transactionAmount"
                           placeholder="Enter Transaction Amount"
                           value={transactionAmount}
                           onChange={(e) => setTransactionAmount(e.target.value) }
                    />
                </div>
                <button className="btn"> 
                    Add Transaction
                </button>
            </form>
        </div>
    )
}
