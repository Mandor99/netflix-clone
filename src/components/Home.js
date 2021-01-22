import React from 'react';
import Rows from './Rows';
import requests from '../dataRequests/requests';

function Home() {
	return (
		<main>
			{requests.map(({ title, url }) => (
				<Rows key={Math.random()} title={title} url={url} />
			))}
		</main>
	);
}

export default Home;
