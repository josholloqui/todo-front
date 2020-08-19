import React from 'react';
import './home.css';

class Home extends React.Component {
    // state = {  }
    render() { 
        return (
            <main className='home-main'>
                <h2 className='hp-h2'>
                    Welcome to TwoDodo, your todo list
                </h2>
                <button className='get-started'>Get Started</button>
            </main>
        );
    }
}
 
export default Home;