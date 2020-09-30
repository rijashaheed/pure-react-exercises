import './App.css';
import PropTypes from 'prop-types';

import React from 'react';

const CreditCard = ({cardInfo}) => {
    const {cardHolder, expirationDate, creditCardNo, bankName} = cardInfo;
    const {no1, no2, no3, no4} = creditCardNo;
    const {month, year} = expirationDate;
    return (
        <div className="creditCardWrapper">
            <div className="creditCard">
                <span className="bankName">{bankName}</span>
                <div className="creditCardNo">
                    <span className="cardNo No--1">{no1}</span>
                    <span className="cardNo No--2">{no2}</span>
                    <span className="cardNo No--3">{no3}</span>
                    <span className="cardNo No--4">{no4}</span>
                </div>
                <span className="subscriptNo">{no1}</span>
                <span className="validText">Valid Thru</span>
                <span className="expirationDate">
                    <span className="month"> {month} / </span>
                    <span className="year"> {year}</span>
                </span>
                <span className="cardHolder">{cardHolder}</span>
            </div>
        </div>
    )
}


CreditCard.propTypes = {
    bankName : PropTypes.string.isRequired,
    creditCardNo: PropTypes.shape ({
        no1 : PropTypes.number.isRequired,
        no2: PropTypes.number.isRequired,
        no3: PropTypes.number.isRequired,
        no4: PropTypes.number.isRequired
        }),
    expirationDate: PropTypes.shape ({
        month: PropTypes.number.isRequired,
        year: PropTypes.number.isRequired
    }),
    cardHolder: PropTypes.string.isRequired

    }


export default CreditCard;