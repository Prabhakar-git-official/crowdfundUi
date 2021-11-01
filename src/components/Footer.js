import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import Logo from '../assets/images/logo.png';
import Twitter from '../assets/images/twitter.svg'
import Medium from '../assets/images/m-icon.svg'
import Telegram from '../assets/images/telegram-icon.svg'

function Footer() {
    return (
        <div className="footer py-3">
            <Container>
                <Row className="align-items-center">
                    <Col md={4} className="text-md-start py-2 text-center">
                        <a href="/" className="footer-logo"><img src={Logo} alt="logo" /> Avalaunch</a>
                    </Col>
                    <Col md={4} className="text-center py-md-2 py-5">
                        <div className="footer-social">
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/AvalaunchApp">
                                <img src={Twitter} alt="Twitter" />
                            </a>

                            <a target="_blank" rel="noopener noreferrer" href="https://medium.com/avalaunch">
                                <img src={Medium} alt="Medium" />
                            </a>

                            <a target="_blank" rel="noopener noreferrer" href="https://t.me/avalaunch_app">
                                <img src={Telegram} alt="Telegram" />
                            </a>
                        </div>
                    </Col>
                    <Col md={4} className="text-md-end text-center py-2">
                        <p>© AVALAUNCH - 2021 COPYRIGHT</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;