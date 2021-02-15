import React, { Component } from 'react';

class Detail extends Component {
  render() {
    const { match: { params } } = this.props;
    console.log(params);

    return (
      <div>
          <h1>Ini component Detail</h1>
      </div>
    );
  }
}

export default Detail;
