import React, {useState, useEffect} from 'react';
import { Nav, Img, Logo } from '../styles/NavbarStyle';

function Navbar() {
    const [isDark, isLight] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 100 ? isLight(true) : isLight(false)
        })
        return () => window.removeEventListener('scroll')
    }, [])
	return (
        <Nav dark={isDark}>
        <figure>
            <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="netflix logo"/>
        </figure>
            <figure>
                <Img src="https://avatars3.githubusercontent.com/u/31844287?s=88&v=4" alt="avatar"/>
            </figure>
		</Nav>
	);
}

export default Navbar;
