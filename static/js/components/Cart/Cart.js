import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchCartItem, removeItemFromCart} from '../../action/index';
import '../../../css/cart.css';

class Cart extends Component{
    constructor(props) {
        super(props);
        this.removeItem = this.removeItem.bind(this);
      }

      removeItem(item) {
          this.props.removeItemFromCart(item);
          this.props.createNotification('error', item);
      }

   render(){
       if (this.props.cart.length === 0) {
           return (<div />);
       }
      return(
         <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 col-12 mx-auto cart">  
           <div className="row m-2">
                <div className="col-lg-12 text-center">
                    <h2>Shopping Cart</h2>
                </div>
           </div>
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    {this.props.cart.map((item) => {
                        return (
                            <div className="row cart-item-card"  key={item.id}>
                                <div className="col-lg-3">
                                    <img src={item.imageURL} width={'100%'} height={'100%'}/>
                                </div>
                                <div className="col-lg-7">
                                    <p>{item.name}</p>
                                    <p>$ {item.price}</p>
                                </div>
                                <div className="col-lg-2 text-center remove-btn-container">
                                    <button 
                                    className="btn btn-primary remove-btn" 
                                    onClick={() => { this.removeItem(item);}}>Remove</button>
                                </div>
                            </div>
                        );
                    })}
                </div>  
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <p className="text-center total-header">Total</p>
                    <p className="total">
                        <span className="total-currency">Total in $</span>
                        <span className="total-amount">{this.props.total}</span>
                    </p>
                    <div className="checkout">
                        <button className="btn btn-primary checkout-btn">Checkout</button>
                    </div>
                </div>  
            </div>
         </div>
      );
   }
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
        total: state.total
        };
}

function mapDispatchToProps(dispatch) {
    return {
        getCartItem: () => {dispatch(fetchCartItem())},
        removeItemFromCart: (item) => {dispatch(removeItemFromCart(item))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
