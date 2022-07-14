
import React from 'react';
import data from './data';
import List from './List';

class App extends React.Component {
  constructor() {
    super();
    this.state = { countries: data };
  }
  render() {
    const { countries } = this.state;
    return (
      <main>
        <h1>Countries List</h1>
       
        
          <List countries={countries} />
         
       
      </main>
    );
  }
}

export default App;
