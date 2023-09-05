// PacketLatencyDisplay.js

import React, { Component } from 'react';
import WebSocket from 'websocket';

class PacketLatencyDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latency: null,
    };
  }

  componentDidMount() {
    // Create a WebSocket connection to Pylon's endpoint.
    const client = new WebSocket.client();
    const wsURL = 'ws://localhost:55455'; // Change this URL as needed

    client.on('connectFailed', (error) => {
      console.error('WebSocket connection error:', error);
    });

    client.on('connect', (connection) => {
      console.log('Connected to Pylon');

      connection.on('message', (message) => {
        if (message.type === 'utf8') {
          const data = JSON.parse(message.utf8Data);
          if (data.timestamp) {
            // Calculate packet latency.
            const packetTimestamp = data.timestamp;
            const currentTimestamp = Date.now();
            const latency = currentTimestamp - packetTimestamp;

            this.setState({ latency });
          }
        }
      });

      connection.on('close', () => {
        console.log('WebSocket connection closed');
      });
    });

    // Connect to the WebSocket server.
    client.connect(wsURL);
  }

  render() {
    return (
      <div className="packet-latency-display">
        <h3>Packet Latency</h3>
        {this.state.latency !== null ? (
          <p>{this.state.latency} ms</p>
        ) : (
          <p>Waiting for data...</p>
        )}
      </div>
    );
  }
}

export default PacketLatencyDisplay;
