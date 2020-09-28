import React from 'react';
import '../styles/app.css';

/* App -> contains:
price (upper left) - if calendar pricing differs (can add logic to add 5% for weekends)
rating (upper right)
date picker (mid-upper)
guestsDetails(mid-lower)
Check Avail button (lower)
(hidden) - cost estimate & reserve button

modals (calendar pop up, guest picker drop down, check avail (expands app container))

state:
  manage property details in props

render each nested functional component (use hooks if needed)
*/

// top level service component (displayed before user interacts with anything)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // hard code some data to dummy display
    };
  }

  // Axios GET req

  // add price and reviews to app level

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
