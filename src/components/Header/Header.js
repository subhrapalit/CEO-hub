import React from 'react';

const Header = () => {
    return (

        // Header Section
        <div className="text-center bg-info">
            <div className="text-danger">
                <h1>Welcome To CEO's Hub</h1>
                <p>Invite One for Your Program</p>
            </div>
            <div className="text-success">
                <h3>Invitation Charge: $ <span> 5000</span></h3>
            </div>
        </div>
    );
};

export default Header;