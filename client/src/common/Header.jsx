import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

export default function Header() {
    const logout = () => {
        localStorage.clear()
        window.location.reload();
    }
    return (
        <Navbar bg="dark" variant="dark" className="justify-content-between rbr">
            <Nav.Link className="text-white fw-bolder main-logo" href="/">
                XOX
            </Nav.Link>
            <Nav.Link className="text-light" href="#" onClick={logout}>
                Logout
            </Nav.Link>
        </Navbar>
    )
}
