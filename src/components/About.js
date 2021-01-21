import React, { Component } from 'react';

import Header from './Header';
import Nav_Banner from './Nav_Banner';
import About_Desc from './About_Desc';
import Partners from './Partners';
import Footer from './Footer';
import Testimonials from './Testimonials';
import Advantages from './Advantages';
import Sub_Banner from './Sub_Banner';
import Sale from './Sale';

class About extends Component {
  render() {
    return (
      <div>
        <div className="banner-top container-fluid" id="home">
            <Header navAbout='active' />
            <Nav_Banner path_location="About Us" />
        </div>
        <section className="banner-bottom-wthreelayouts py-lg-5 py-3">
        <div className="container-fluid">
            <div className="inner-sec-shop px-lg-4 px-3">
              <About_Desc />
              <Partners />
              <Sale />
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

export default About;
