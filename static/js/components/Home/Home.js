import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import '../../../css/products.css';
import 'react-notifications/lib/notifications.css';

class Home extends Component{
    constructor(props) {
        super(props);
        this.createNotification = this.createNotification.bind(this);
      }

   createNotification(type, item) {
       console.log('IN notification container ' + type);
      switch (type) {
        case 'success':
          NotificationManager.success('Your item ' + item.name + ' is Added ' , 'ADDING ITEM');
          break;
        case 'error':
          NotificationManager.error('Your Item ' + item.name + '  is Removed', 'REMOVING ITEM');
          break;
      }
  };

   render(){
       const link = '/cart';
      return(
         <div className="row proudcts">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                <header>
                    <div className="logo" />
                    <nav>
                            <div className="nav-content">
                                <a href="#">Men</a>
                            </div>
                            <div className="nav-content">
                                <a href="#">Women</a>
                            </div>
                            <div className="nav-content">
                                <a href="#">Kids</a>
                            </div>
                    </nav>
                     <div className="actions">
                            <div className="user">
                                    <span><i className="material-icons">account_circle</i></span>
                                    <span>Profile</span>
                            </div>
                            <Link to={link}>
                                <div className="shopping-cart">
                                    <span><i className="material-icons">shopping_cart</i></span>
                                    <span>Cart</span>
                                </div>
                            </Link>    
                    </div>
                    <div className="query">
                            <div>
                                <input type="text" />
                                <i className="material-icons search-icon">search</i>
                            </div>
                    </div>
                </header>
            </div> 
            <Products createNotification={this.createNotification} />
            <div className="row w-100">
                <Cart createNotification={this.createNotification}/>
            </div>
            <NotificationContainer />
         </div>
      );
   }
}


export default Home;
