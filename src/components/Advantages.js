import React, { Component } from 'react';

class Advantages extends Component {
  render() {
    return (
      <div>
        {/* /grids */}
        <div className="bottom-sub-grid-content py-lg-5 py-3">
                <div className="row">
                <div className="col-lg-4 bottom-sub-grid text-center">
                    <div className="bt-icon">
                    <span className="far fa-hand-paper" />
                    </div>
                    <h4 className="sub-tittle-w3layouts my-lg-4 my-3">Satisfaction Guaranteed</h4>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                    <p>
                    <a href="shop.html" className="btn btn-sm animated-button gibson-three mt-4">Shop Now</a>
                    </p>
                </div>
                {/* /.col-lg-4 */}
                <div className="col-lg-4 bottom-sub-grid text-center">
                    <div className="bt-icon">
                    <span className="fas fa-rocket" />
                    </div>
                    <h4 className="sub-tittle-w3layouts my-lg-4 my-3">Fast Shipping</h4>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                    <p>
                    <a href="shop.html" className="btn btn-sm animated-button gibson-three mt-4">Shop Now</a>
                    </p>
                </div>
                {/* /.col-lg-4 */}
                <div className="col-lg-4 bottom-sub-grid text-center">
                    <div className="bt-icon">
                    <span className="far fa-sun" />
                    </div>
                    <h4 className="sub-tittle-w3layouts my-lg-4 my-3">UV Protection</h4>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                    <p>
                    <a href="shop.html" className="btn btn-sm animated-button gibson-three mt-4">Shop Now</a>
                    </p>
                </div>
                {/* /.col-lg-4 */}
                </div>
            </div>
            {/* //grids */}
            {/* /clients-sec */}
            <div className="testimonials p-lg-5 p-3 mt-4">
                <div className="row last-section">
                <div className="col-lg-3 footer-top-w3layouts-grid-sec">
                    <div className="mail-grid-icon text-center">
                    <i className="fas fa-gift" />
                    </div>
                    <div className="mail-grid-text-info">
                    <h3>Genuine Product</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <div className="col-lg-3 footer-top-w3layouts-grid-sec">
                    <div className="mail-grid-icon text-center">
                    <i className="fas fa-shield-alt" />
                    </div>
                    <div className="mail-grid-text-info">
                    <h3>Secure Products</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <div className="col-lg-3 footer-top-w3layouts-grid-sec">
                    <div className="mail-grid-icon text-center">
                    <i className="fas fa-dollar-sign" />
                    </div>
                    <div className="mail-grid-text-info">
                    <h3>Cash on Delivery</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <div className="col-lg-3 footer-top-w3layouts-grid-sec">
                    <div className="mail-grid-icon text-center">
                    <i className="fas fa-truck" />
                    </div>
                    <div className="mail-grid-text-info">
                    <h3>Easy Delivery</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                </div>
            </div>
            {/* //clients-sec */}
      </div>
    );
  }
}

export default Advantages;
