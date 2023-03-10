import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/cart_reducer';
import {
	ADD_TO_CART,
	REMOVE_CART_ITEM,
	TOGGLE_CART_ITEM_AMOUNT,
	CLEAR_CART,
	COUNT_CART_TOTALS,
} from '../actions';

// Check if we have already items in local storage
const getLocalStorage = () => {
	let cart = localStorage.getItem('cart');
	if (cart) {
		return JSON.parse(localStorage.getItem('cart'));
	} else {
		return [];
	}
};

const initialState = {
	cart: getLocalStorage(),
	total_items: 0,
	total_amount: 0,
	shipping_fee: 534,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// Add to cart
	const addToCart = (id, color, amount, product) => {
		dispatch({
			type: ADD_TO_CART,
			payload: { id, color, amount, product },
		});
	};

	// Remove item from cart
	const removeItemFromCart = () => {};
	// Toggle amount
	const toggleAmount = () => {};
	// clear cart
	const clearCart = () => {};

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(state.cart));
	}, [state.cart]);

	return (
		<CartContext.Provider
			value={{
				...state,
				addToCart,
				removeItemFromCart,
				toggleAmount,
				clearCart,
			}}>
			{children}
		</CartContext.Provider>
	);
};
// make sure use
export const useCartContext = () => {
	return useContext(CartContext);
};
