import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/filter_reducer';
import {
	LOAD_PRODUCTS,
	SET_GRIDVIEW,
	SET_LISTVIEW,
	UPDATE_SORT,
	SORT_PRODUCTS,
	UPDATE_FILTERS,
	FILTER_PRODUCTS,
	CLEAR_FILTERS,
} from '../actions';
import { useProductsContext } from './products_context';

const initialState = {
	filtered_products: [],
	all_products: [],
	grid_view: false,
	sort: 'price-lowest',
	filters: {
		text: '',
		company: 'all',
		category: 'all',
		color: 'all',
		min_price: 0,
		max_price: 0,
		price: 0,
		shipping: false,
	},
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
	const { products } = useProductsContext();
	// dispatch = type of action we want to take over the state
	// reducer = the implimentation of the type of action
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		dispatch({ type: LOAD_PRODUCTS, payload: products });
	}, [products]);

	useEffect(() => {
		dispatch({ type: FILTER_PRODUCTS });
		dispatch({ type: SORT_PRODUCTS });
	}, [products, state.sort, state.filters]);

	const setGridView = () => {
		dispatch({ type: SET_GRIDVIEW });
	};

	const setListView = () => {
		dispatch({ type: SET_LISTVIEW });
	};

	// Will call update sort every time the user change something in the sort menu
	const updateSort = e => {
		// const name = e.target.name;
		const value = e.target.value;
		dispatch({ type: UPDATE_SORT, payload: value });
	};

	// Will call update filters every time the user change something in the filters
	const updateFilters = e => {
		let name = e.target.name;
		let value = e.target.value;
		// Check if we are clicking on a button category. In such case, we need to grab the text from the button text content and not the target value
		if (name === 'category') {
			value = e.target.textContent;
		}
		// Check if we are clicking on a button color. In such case, we need to grab the text from the button dataset (data-color attribute) and not the target value
		if (name === 'color') {
			value = e.target.dataset.color;
		}
		dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
	};

	// Reset filters / clear filters
	const clearFilters = e => {};

	return (
		// 'state' contains 'initialState'
		<FilterContext.Provider
			value={{
				...state,
				setGridView,
				setListView,
				updateSort,
				updateFilters,
				clearFilters,
			}}>
			{children}
		</FilterContext.Provider>
	);
};
// make sure use
export const useFilterContext = () => {
	return useContext(FilterContext);
};
