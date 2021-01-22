import React, { useState, useEffect } from 'react';
import axiosUrl from '../dataRequests/axiosUrl';
import { baseURL_IMAGES } from '../dataRequests/requests';
import {
	Img,
	Wrapper,
	/*Figure,*/ Section,
	Heading2,
} from '../styles/RowsStyle';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Rows({ title, url }) {
	const [movies, setMovies] = useState([]);
	const [videoId, setVideoId] = useState('');
	const opts = {
		height: '390',
		width: '95%',
		playerVars: {
			autoplay: 1,
		},
	};

	useEffect(() => {
		const fetchedData = async () => {
			const response = await axiosUrl.get(url);
			setMovies(response.data.results);
		};
		fetchedData();
	}, [url]);

	const playTrailer = (movie) => {
		videoId
			? setVideoId('')
			: movieTrailer(movie?.name || movie?.original_name || '')
					.then((responseUrl) => {
						const url = new URL(responseUrl);
						//https://www.youtube.com/watch?v=xfhljlcni
						const urlId = new URLSearchParams(url.search);
						setVideoId(urlId.get('v'));
					})
					.catch((error) => alert(error));
	};

	const makeResponsive = (e) => console.log(e.target.h);

	return (
		<Section>
			<Heading2>{title}</Heading2>
			<Wrapper>
				{movies && movies.length > 0
					? movies.map((movie) => (
							// <Figure key={id}>
							<Img
								key={movie?.id}
								onClick={() => playTrailer(movie)}
								src={`${baseURL_IMAGES}${
									title !== 'netflix original'
										? movie?.backdrop_path
										: movie?.poster_path
								}`}
								alt={movie?.name}
								className={`${
									title === 'netflix original' && 'movie__bigPoster'
								}`}
							/>
							// </Figure>
					  ))
					: '...loading'}
			</Wrapper>

			{videoId && (
				<YouTube
					videoId={videoId}
					opts={opts}
					style={{ maxWidth: '90%' }}
					onReady={makeResponsive}
				/>
			)}
		</Section>
	);
}

export default Rows;
