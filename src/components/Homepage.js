import React, { Component } from 'react';

import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import Product from './Product';
import Testimonials from './Testimonials';
import Product_Slider from './Product_Slider';
import Advantages from './Advantages';
import Sub_Banner from './Sub_Banner';
import Sale from './Sale';

class Homepage extends Component {
  render() {
    return (
      <div>
        <div className="banner-top container-fluid" id="home">
            <Header navHome='active' />
            <Banner />
        </div>
        <section className="banner-bottom-wthreelayouts py-lg-5 py-3">
        <div className="container-fluid">
            <div className="inner-sec-shop px-lg-4 px-3">
                <h3 className="tittle-w3layouts my-lg-4 my-4">New Arrivals for you </h3>
                
                <Product />
                <Sale />
                <Product_Slider />
                <Testimonials />
                <Sub_Banner />
                <Advantages />
            </div>
        </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Homepage;
