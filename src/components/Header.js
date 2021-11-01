import React from 'react';
import {Container} from 'react-bootstrap';

import Logo from '../assets/images/logo.png';

function Header() {
    return (
        <header className="header">
            <Container>
                <a href="/" className="header-logo"><img src={Logo} alt="logo" /> Avalaunch</a>
            </Container>
        </header>
    );
}

export default Header;