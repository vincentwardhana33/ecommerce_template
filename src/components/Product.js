import React, { Component } from 'react';

class Product extends Component {
  render() {
    const products = this.props.products.map((item, index)=>{
        return <div className="col-md-3 product-men women_two">
        <div className="product-googles-info googles">
            <div className="men-pro-item">
            <div className="men-thumb-item">
                <img src={item.image_url} className="img-fluid" alt="" />
                <div className="men-cart-pro">
                <div className="inner-men-cart-pro">
                    <a href="single.html" className="link-product-add-cart">Quick View</a>
                </div>
                </div>
                <span className="product-new-top">New</span>
            </div>
            <div className="item-info-product">
                <div className="info-product-price">
                <div className="grid_meta">
                    <div className="product_price">
                    <h4>
                        <a href="single.html">{item.name}</a>
                    </h4>
                    <div className="grid-price mt-2">
                        <span className="money ">IDR {item.price}</span>
                    </div>
                    </div>
                    <ul className="stars">
                    <li>
                        <a href="#">
                        <i className="fa fa-star" aria-hidden="true" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <i className="fa fa-star" aria-hidden="true" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <i className="fa fa-star" aria-hidden="true" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <i className="fa fa-star" aria-hidden="true" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <i className="fa fa-star-half-o" aria-hidden="true" />
                        </a>
                    </li>
                    </ul>
                </div>
                <div className="googles single-item hvr-outline-out">
                    <form action="#" method="post">
                    <input type="hidden" name="cmd" defaultValue="_cart" />
                    <input type="hidden" name="add" defaultValue={1} />
                    <input type="hidden" name="googles_item" defaultValue="Farenheit" />
                    <input type="hidden" name="amount" defaultValue={575.00} />
                    <button type="submit" className="googles-cart pgoogles-cart">
                        <i className="fas fa-cart-plus" />
                    </button>
                    </form>
                </div>
                </div>
                <div className="clearfix" />
            </div>
            </div>
        </div>
    </div>;
    })
      
    return (
      <div>
            <div className="row">
                {products}
            </div>
      </div>
    );
  }
}

export default Product;
