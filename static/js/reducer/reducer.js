import {GETPRODUCT} from '../action/index';
import {GETCARTITEM} from '../action/index';
import {ADDTOCART} from '../action/index';
import {REMOVEFROMCART} from '../action/index';

const initialState = {
    cart: [],
    total: 0
}

export default function productReducer(state = initialState, action) {
    switch(action.type) {
        case GETPRODUCT: 
           return Object.assign({}, state,{products: action.data});

        case GETCARTITEM: 
           return Object.assign({}, state,{cart: state.cart}); 

        case ADDTOCART: 
                const existingItem = state.cart.slice();
                let totalNew = state.total;
                let itemExist = existingItem.find((item) => {return item.id === action.data.id})
                if (!itemExist) {
                totalNew += action.data.price;
                existingItem.push(action.data);
                }
           return Object.assign({}, state,{cart: existingItem, total: totalNew});

        case REMOVEFROMCART: 
                const existingItemInCart = state.cart.filter((item) => {
                    return item.id !== action.data.id
                });
                let totalInRemoving = state.total;
                totalInRemoving -= action.data.price;
                console.dir(existingItemInCart);
           return Object.assign({}, state,{cart: existingItemInCart, total: totalInRemoving});

        default :
        return state;
    }
}
