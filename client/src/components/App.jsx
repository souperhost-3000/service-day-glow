import React from 'react';
import '../styles/app.css';

// top level service component (displayed before user interacts with anything)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="app-container">
        <div className="header">
          <h2>Airbnb Check Availability Service</h2>
        </div>
      </div>
    );
  }
}

export default App;
