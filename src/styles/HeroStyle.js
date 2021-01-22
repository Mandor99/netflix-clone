import styled from 'styled-components';

export const Header = styled.header`
	background-image: linear-gradient(
			180deg,
			transparent,
			rgba(37, 37, 37, 0.6),
			#111
		),
		url(${(props) => props.imgUrl});
	background-size: cover;
	background-position: center center;
	height: 60vh;
	margin-bottom: 2rem;
	display: flex;
	/* justify-content: center; */
	align-items: center;
	overflow: hidden;
`;
export const Wrapper = styled.div`
	/* padding: 10rem 0 3rem 2rem; */
	padding: 0 0 3rem 2rem;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	color: #fff;
`;
export const Heading2 = styled.h2`
	font-size: 3rem;
	text-transform: capitalize;
`;
export const BTNWrapper = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
`;
export const BTN = styled.button`
	border: none;
	outline: none;
	padding: 0.5rem 1.7rem;
	border-radius: 0.2vw;
	background-color: rgba(15, 15, 15, 0.6);
	color: #fff;
	font-size: 1rem;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.2s ease;
	text-transform: capitalize;

	&:hover {
		color: #000;
		background-color: #e6e6e6;
	}
`;
export const Overview = styled.p`
	font-size: 0.8rem;
	width: 30rem;
	max-width: 90%;

	@media all and (max-width: 360px) {
		width: 25rem;
	}
`;
