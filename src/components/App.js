import React from 'react';
import {data, date} from '../data';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab"> Movies </div>
          <div className="tab"> Favourites </div>
        </div>

        <div className="list">
          {data.map}
        </div>
      </div>
    </div>
  );
}

export default App;
