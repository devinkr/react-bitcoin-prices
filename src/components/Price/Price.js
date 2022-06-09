import { useEffect } from 'react';
import './Price.css';
import { useParams } from 'react-router-dom';

const coindeskURL = 'https://api.coindesk.com/v1/bpi/currentprice/';

const Price = ({ price, setPrice }) => {
	const { currency } = useParams();

	useEffect(() => {
		const url = `${coindeskURL}${currency}.json`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				let newPrice = res.bpi[currency].rate;
				setPrice(newPrice);
			})
			.catch((err) => {
				console.error(err);
			});

		return () => {
			// Cleanup when the component unmounts so you don't see old price while new one is getting fetched.
			setPrice(null);
		};
	}, []);

	return (
		<div>
			<h1>Bitcoin price in {currency}</h1>
			<div className='price'>{price ? price : 'Data not found'}</div>
		</div>
	);
};

export default Price;
