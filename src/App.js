import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import Nav from './components/Navbar';
import {
	Home,
	About,
	Auth,
	Cart,
	CheckOut,
	Products,
	ErrorPage,
	PrivateRoute,
	Product,
} from './pages';

function App() {
	return (
		<Router>
			<Navbar />
			<Sidebar />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/about'>
					<About />
				</Route>
				<Route exact path='/cart'>
					<Cart />
				</Route>
				<Route exact path='/products'>
					<Products />
				</Route>
				<Route exact path='/products/:id' children={<Product />} />
				<Route exact path='/checkout'>
					<CheckOut />
				</Route>
				<Route path='*'>
					<ErrorPage />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
