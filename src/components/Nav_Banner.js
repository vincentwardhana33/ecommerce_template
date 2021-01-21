import React, { Component } from 'react';

class Nav_Banner extends Component {
  render() {
    return (
      <div>
        <div className="banner_inner">
            <div className="services-breadcrumb">
                <div className="inner_breadcrumb">
                    <ul className="short">
                        <li>
                        <a href="index.html">Home</a>
                        <i>|</i>
                        </li>
                        <li>{this.props.path_location}</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Nav_Banner;
