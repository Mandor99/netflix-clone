import React, { useState, useEffect } from 'react';
import requests, { baseURL_IMAGES } from '../dataRequests/requests';
import axiosUrl from '../dataRequests/axiosUrl';
import {Header, Wrapper, Heading2, Overview, BTN, BTNWrapper} from '../styles/HeroStyle';

function Hero() {
	const [poster, setPoster] = useState([]);
	useEffect(() => {
		const getPoster = async () => {
			const response = await axiosUrl.get(requests[0].url);
			setPoster(response.data.results[Math.floor(Math.random() * response.data.results.length -1)])
			console.log(response.data.results[0]);
		};
		getPoster();
    }, []);
    const truncateTxt = (txt, limit) => {
        return txt?.length > 0 ? txt.substr(0, limit-1) + '...' : txt
    }
	return (
        <Header imgUrl={`${baseURL_IMAGES}${poster?.backdrop_path}`}>
            <Wrapper>
                <Heading2>{poster?.name || poster?.original_name}</Heading2>
                <BTNWrapper>
                    <BTN>play</BTN>
                    <BTN>my list</BTN>
                </BTNWrapper>
                <Overview>
                {truncateTxt(poster?.overview, 300)}
                </Overview>
            </Wrapper>
		</Header>
	);
}

export default Hero;
