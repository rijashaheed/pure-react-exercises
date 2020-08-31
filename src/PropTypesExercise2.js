import './App.css';

import React from 'react';

import AddressLabel from '../src/PropTypesExercise1';

const Envelope = ({toPerson, fromPerson}) => {
    return (
        <div className="box">
            <div className="envelope">
            <div className="toPerson">
                    <AddressLabel person = {toPerson}/>
                </div>

                <div className="stamp__box">
                    <div class="stamp">stamp</div>
                </div>
               
                <div className="fromPerson">
                    <AddressLabel person = {fromPerson}/>
                </div>
            </div>
        </div>
    )
}

export default Envelope;
