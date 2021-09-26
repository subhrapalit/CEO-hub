import { useState, useEffect } from 'react';
import CEO from '../Ceos/CEO';
import Guest from '../Guest/Guest';

const Hire = () => {
    const [ceos, setCeos] = useState([]);
    const [guest, setGuest] = useState([]);

    const handleAddGuest = (ceo) => {
        console.log(ceo);
        const newGuest = [...guest, ceo];
        setGuest(newGuest);
    }
    // Load Fake Data
    useEffect(() => {
        fetch('/ceos.JSON')
            .then(res => res.json())
            .then(data => setCeos(data));
    }, [])
    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            ceos.map(ceo => <CEO
                                key={ceo.id}
                                ceo={ceo}
                                handleAddGuest={handleAddGuest}></CEO>)
                        }
                    </div>

                </div>
                <div className="col-md-3">
                    <Guest guest={guest}></Guest>

                </div>
            </div>
        </div>
    );
};

export default Hire;