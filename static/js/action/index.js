export const GETPRODUCT = 'GETPRODUCT';
export const GETCARTITEM = 'GETCARTITEM';
export const ADDTOCART = 'ADDTOCART';
export const REMOVEFROMCART = 'REMOVEFROMCART';

export function getProduct(data) {
    return {type: GETPRODUCT, data: data}
}

export function getCartItem(data) {
    return {type: GETCARTITEM, data: data}
}

export function addItemToCart(data) {
    return {type: ADDTOCART, data: data}
}

export function removeItemFromCart(data) {
    return {type: REMOVEFROMCART, data: data}
}

export function fetchProductData(url) {
  return (dispatch) => {
    // console.log(items);
    fetch(url, {mode: 'cors'})
    .then(response => response.json())
    .then((data) => {
      console.log('after fetching data');
     console.dir(data);
      dispatch(getProduct(data));
    }).catch(error => console.log('error occured ' + error)); 
  };   
}

export function fetchCartItem() {
    return (dispatch) => {
        dispatch(getCartItem([]));
    }
}

// export function addItemToCart(item) {
// return (dispatch)
// }
