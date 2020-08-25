import React from 'react';
import PropTypes from 'prop-types';

const AddressLabel = ({person}) => {
    const {name, address} = person;
    const {streetNo, streetName, city, state, postalCode} = address;
    return(
        <>
        <div className="person">
            <span className="person__name">{name}</span>
            <div className="person__address">
                <span className="person__address__street">    
                    <span className="person__address__street--streetNo"> {streetNo} </span>
                    <span className="person__address__street--streetName"> {streetName} </span>
                 St.
                </span>
                <div className="person__address__country">
                    <span className="person__address__country--city"> {city}, </span>
                    <span className="person__address__country--state"> {state} </span>
                    <span className="person__address__country--postalCode"> {postalCode}</span>
                </div>
            </div>
        </div>
        </>
    )
}

AddressLabel.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        address: PropTypes.shape({
            streetNo: PropTypes.number.isRequired,
            streetName: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            state: PropTypes.string.isRequired,
            postalCode: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ])
        })
    })
}

export default AddressLabel; 
