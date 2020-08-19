import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import Home from './Home/Home.js';
import Authorization from './Authorization.js';
import TodoList from './TodoList.js';
import Header from './Header/Header.js';
import Footer from './Footer.js';
import './App.css';

class App extends React.Component {
  state = {
    token: localStorage.getItem('token'),
  }

  handleToken = (token) => {
    this.setState({ token: token })

    localStorage.setItem('token', token)
  }

  clearToken = () => {
    this.setState({ token: ''})

    localStorage.setItem('token', '')
  }

  render() { 
    return (
      <>
      <body>
            <Router>
                <Header />
                <Switch>
                    <Route 
                        path="/" 
                        exact
                        render={(routerProps) => <Home {...routerProps} />} 
                    />
                    <Route 
                        path="/login" 
                        exact
                        render={(routerProps) => <Authorization handleToken={this.handleToken} token={this.state.token} {...routerProps} />} 
                    />
                    <Route 
                        path="/todo" 
                        exact
                        render={(routerProps) => <TodoList token={this.state.token} {...routerProps} />} 
                    />
                </Switch>
                <Footer />
            </Router>
        </body>
        </>
    )
  }
}

export default App;
