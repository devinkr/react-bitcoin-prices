import { useState } from 'react';
import Home from '../Home/Home';
import Currencies from '../Currencies/Currencies';
import Price from '../Price/Price';
import NotFound from '../NotFound/NotFound';
import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

function App() {
	const [price, setPrice] = useState();

	return (
		<div>
			<nav>
				<Link to='/'>
					<img
						src='https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png'
						alt=''
					/>
					<h1>Bitcoin prices</h1>
				</Link>
				<Link to='/currencies'>
					<h2>Currency List</h2>
				</Link>
			</nav>
			<main>
				<Routes>
					{/* Where content is switched out according to different urls */}
					<Route path='/' element={<Home />} />
					<Route path='/currencies' element={<Currencies />} />
					{/* Use to redirect user to correct URL. Could also use for form to send user to another component on submit */}
					<Route path='/currency' element={<Navigate to='/currencies' />} />
					<Route
						path='/price/:currency'
						element={<Price price={price} setPrice={setPrice} />}
					/>
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
