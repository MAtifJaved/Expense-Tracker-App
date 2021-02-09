import React from 'react';

export default function TransactionHistory ()  {
    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                <li className="plus">
                    Project 1 Income
                    <span>$1000</span>
                    <button className="delete-btn">X</button>
                </li>
                <li className="minus">
                    project 2 Income
                    <span>-$2000</span>
                    <button className="delete-btn">X</button>
                </li>
            </ul>
        </div>
    )
}
