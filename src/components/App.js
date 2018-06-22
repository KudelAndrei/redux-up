import React, { Component } from 'react';

import Form from './form';
import Lists from './lists';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1000px', margin: '0 auto' }}>
          <Form />
          <Lists />
        </header>
      </div>
    );
  }
}


export default App;
