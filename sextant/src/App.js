// App.js

import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IpAddressDisplay from './IpAddressDisplay';

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit title="Public IP Addresses">
        <div className="ip-addresses-container">
          <IpAddressDisplay ipVersion="ipv4" />
          <IpAddressDisplay ipVersion="ipv6" />
        </div>
      </Exhibit>
    </div>
  );
}

export default App;
