import React from 'react';
import { PropTypes } from 'prop-types';
import './Data.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Data extends React.Component {

  render() {
    const { responceData } = this.props;
    return (
      <div className="items">
        {responceData && responceData.map((data, i) => {
          const href = `mailo:${data.email}`;
          return (
            <div className="item" key={data.id + i}>
              <h4>{data.name}</h4>
              <a href={href}>{data.email}</a>
              <i>{data.body}</i>
            </div>
          );
        })}
      </div>
    );
  }
}

Data.propTypes = {
  responceData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Data;
