import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    // state = {  }
    render() { 
        return (
            <main className='home-main'>
                <h2 className='hp-h2'>
                    Welcome to TwoDodo, your to-do list
                </h2>
                <Link to='/todo'>
                    <button className='get-started'>Get Started</button>
                </Link>
            </main>
        );
    }
}
 
export default Home;