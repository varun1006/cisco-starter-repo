// App.js

import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit title="Sample Exhibit 1">
        {/* Content for Exhibit 1 */}
        <p>This is the content of the first exhibit.</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Exhibit>

      <Exhibit title="Sample Exhibit 2">
        {/* Content for Exhibit 2 */}
        <p>This is the content of the second exhibit.</p>
        <ol>
          <li>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
        </ol>
      </Exhibit>

      <Exhibit title="Sample Exhibit 3">
        {/* Content for Exhibit 3 */}
        <p>This is the content of the third exhibit.</p>
        <blockquote>
          "The only limit to our realization of tomorrow will be our doubts of today."
        </blockquote>
      </Exhibit>
    </div>
  );
}

export default App;
