import React from 'react';

const Guest = (props) => {

    const { guest } = props;


    // Total Salary Calculation
    const totalReducer = (previousAmount, currentAmount) => previousAmount + currentAmount.salary;
    const total = guest.reduce(totalReducer, 0);


    return (

        //Display Total no. of guest, total salary & selected guest name
        <div>
            <h5>Total Guest: {guest.length}</h5>
            <h5>Total Salary Amount: ${total}</h5>

            <ul>
                {
                    guest.map(guest => <li className='fw-bold'>{guest.name}</li>
                    )
                }
            </ul>

        </div>
    );
};

export default Guest;