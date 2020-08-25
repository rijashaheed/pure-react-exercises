import React from 'react';
import AddressLabel from '../src/PropTypesExercise1';

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
  return (
    <div className="App">
      <AddressLabel person={testPerson}/>
    </div>
  );
}

export default App;
