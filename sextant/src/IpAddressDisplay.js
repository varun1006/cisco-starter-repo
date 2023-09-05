// IpAddressDisplay.js

import React, { Component } from 'react';
import axios from 'axios';

class IpAddressDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ipAddress: '',
    };
  }

  componentDidMount() {
    const ipVersion = this.props.ipVersion === 'ipv6' ? 'ipv6' : 'ipv4';

    // Make a GET request to the ipify API based on the selected IP version.
    axios
      .get(`https://api.ipify.org?format=${ipVersion}`)
      .then((response) => {
        this.setState({ ipAddress: response.data });
      })
      .catch((error) => {
        console.error('Error fetching IP address:', error);
      });
  }

  render() {
    const { ipVersion } = this.props;
    const title = ipVersion === 'ipv6' ? 'IPv6 Address' : 'IPv4 Address';

    return (
      <div className="ip-address-display">
        <h3>{title}</h3>
        <p>{this.state.ipAddress}</p>
      </div>
    );
  }
}

export default IpAddressDisplay;
