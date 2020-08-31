import React from 'react';
import AddressLabel from './PropTypesExercise1';
import Envelope from './PropTypesExercise2';

function App() {

  const testPerson = {
    name: 'James Smith',
    address: {
      streetNo: 123,
            streetName: "Fake",
            city: "Boston",
            state: "MA",
            postalCode: "02118"
            
    }
  }

  const recipient = {
    name: 'Lara Smith',
    address: {
      streetNo: 123,
            streetName: "Fake",
            city: "Boston",
            state: "MA",
            postalCode: "02118"
            
    }
  }

  const sender = {
  name: 'Jonnas Smith',
  address: {
    streetNo: 456,
          streetName: "Fake",
          city: "Boston",
          state: "MA",
          postalCode: "02118"
          
  }
  }

  return (
    <div className="App">
      <AddressLabel person={testPerson}/>
      <Envelope toPerson={recipient} fromPerson={sender}/>
    </div>
  );
}

export default App;
