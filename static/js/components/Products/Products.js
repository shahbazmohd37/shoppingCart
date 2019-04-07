import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchProductData, addItemToCart} from '../../action/index';
import urlConstants from '../../constants/urlConstants';

class Products extends Component{
    constructor(props) {
        super(props);
        this.state = {}
        this.addToCart = this.addToCart.bind(this);
      }
   componentDidMount() {
       this.props.getProducts(urlConstants.products);
   }

   addToCart(item) {
       this.props.addItemToCart(item);
       this.props.createNotification('success', item);
   }

   render(){
       if (typeof this.props.products === 'undefined') {
           return (
               <div className="loading-container">
                    <div className="col-lg-6 mx-auto loader">
                        <p>Loadind products...</p>
                        <i className="fa fa-circle-o-notch-fa spin" />
                    </div>
               </div>
           );
       }
      return(
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 products">
                <div className="row pt-2">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <div className="row sort-by-container">
                        <div className="col-lg-3 sort-by">
                           Sort By: <select>
                                <option value="lowToHigh">Low to High</option>
                                <option value="lowToHigh">Popular</option>
                                <option value="lowToHigh">High to Low</option>
                            </select>
                        </div>
                    </div>
                        <ul className="row">
                            {this.props.products.catalog.map((item) => {
                                return (
                                    <li 
                                    className="card" 
                                    key={item.id}>
                                        <img src={item.imageURL} width={'100%'} />
                                        <div className="item-content">
                                            <p>{item.name}</p>
                                            <p><span>{item.currency}</span><span>{item.price}</span></p>
                                            <p className="text-center">
                                                <button 
                                                className="btn btn-primary"
                                                onClick={() => { this.addToCart(item); }}>Add to Cart</button>
                                            </p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
      );
   }
}

function mapStateToProps(state) {
    return {products: state.products}
}

function mapDispatchToProps(dispatch) {
    return {
        getProducts: (url) => {dispatch(fetchProductData(url))},
        addItemToCart: (item) => {dispatch(addItemToCart(item))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
