import styled from 'styled-components';

export const Nav = styled.nav`
	position: fixed;
	z-index: 1000;
	width: 100%;
	height: 8vh;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	transition: all 0.4s ease-in;
	background-color: ${({ dark }) => (dark ? '#111' : 'transparent')};
`;

export const Img = styled.img`
	width: 30px;
	object-fit: contain;
`;
export const Logo = styled(Img)`
	width: 80px;
`;
