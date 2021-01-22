import styled from 'styled-components';

export const Section = styled.section`
	margin: 0 2rem;
`;

export const Heading2 = styled.h2`
	text-transform: capitalize;
	color: #fff;
`;

export const Wrapper = styled.div`
	display: flex;
	gap: 1rem;
	overflow-y: hidden;
	overflow-x: auto;
	padding: 2rem 0.5rem;

	&::-webkit-scrollbar {
		display: none;
	}
`;
// export const Figure = styled.figure`
// 	flex: 1;
// `;

export const Img = styled.img`
	width: 100%;
	max-height: 100px;
	object-fit: contain;
	transition: all 0.2s ease;
	cursor: pointer;

	&:hover {
		transform: scale(1.09);
	}

	&.movie__bigPoster {
		max-height: 250px;
		&:hover {
			transform: scale(1.1);
		}
	}
`;
