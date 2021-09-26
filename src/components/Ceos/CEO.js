import React from 'react';
import './CEO.css';

const CEO = (props) => {

    const { name, company, age, education, salary, img } = props.ceo;
    return (

        // Display data in card
        <div className='col-md-6'>
            <div className="card mb-3" style={{ "maxwidth": "540px" }}>
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={img} className="img-fluid rounded-start card-img" alt="..." />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body card-bg fw-bold">
                            <h3 className="card-title text-info">{name}</h3>
                            <p className="card-text h5">Company: {company}</p>
                            <p className="card-text">Age: {age}</p>
                            <p className="card-text">Education: {education}</p>
                            <p className="card-text">Salary: ${salary}</p>

                            {/*------- Button to invite guest------- */}
                            <button
                                onClick={() => props.handleAddGuest(props.ceo)} className="btn btn-outline-danger fw-bold">Invite Mr. {name}!</button>

                            {/* Social Icon  */}
                            <div className='d-flex mt-3'>
                                <h2 className='px-5'><i className="fab fa-linkedin"></i></h2>
                                <h2 className='px-2'> <i className="fab fa-twitter"></i></h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default CEO;