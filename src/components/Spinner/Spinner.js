import React from 'react';
import './Spinner.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Spinner extends React.Component {

  render() {
    return (
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    );
  }
}

export default Spinner;
