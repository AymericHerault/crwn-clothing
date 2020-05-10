import CartActionTypes from './cart.types';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEMS,
    payload: item
});