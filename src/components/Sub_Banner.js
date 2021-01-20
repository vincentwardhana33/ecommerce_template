import React, { Component } from 'react';

class Sub_Banner extends Component {
  render() {
    return (
      <div>
            <div className="row galsses-grids pt-lg-5 pt-3">
                <div className="col-lg-6 galsses-grid-left">
                <figure className="effect-lexi">
                    <img src="images/banner4.jpg" alt="" className="img-fluid" />
                    <figcaption>
                    <h3>Editor's
                        <span>Pick</span>
                    </h3>
                    <p> Express your style now.</p>
                    </figcaption>
                </figure>
                </div>
                <div className="col-lg-6 galsses-grid-left">
                <figure className="effect-lexi">
                    <img src="images/banner1.jpg" alt="" className="img-fluid" />
                    <figcaption>
                    <h3>Editor's
                        <span>Pick</span>
                    </h3>
                    <p>Express your style now.</p>
                    </figcaption>
                </figure>
                </div>
            </div>
      </div>
    );
  }
}

export default Sub_Banner;
