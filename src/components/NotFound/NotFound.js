import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div>
			<h2>
				Oops! Page not found. <Link to='/'>Click here</Link> to go back home.
			</h2>
			<img
				src='https://media.giphy.com/media/jkZtSdwKOx05BOlapR/giphy.gif'
				alt='404 Not Found Dog'
			/>
		</div>
	);
}

export default NotFound;
