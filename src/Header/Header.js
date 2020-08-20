import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends React.Component {
    state = {  }
    render() { 
        return (
            <header>
                <div>
                    <Link className='logo-div' to="/">
                        <img className='header-logo' src='circle-cropped1.png' alt='twododo logo' />
                        <h1>TwoDodo</h1>
                    </Link>
                </div>
                <nav>
                    <Link className="navLinks login" to="/login">Login</Link>
                    <Link className="navLinks signup" to="/todo">Signup</Link>
                </nav>
            </header>
        );
    }
}
 
export default Header;