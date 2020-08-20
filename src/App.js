import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import Home from './Home/Home.js';
import TodoList from './Todo/TodoList.js';
import Header from './Header/Header.js';
import Footer from './Footer.js';
import './App.css';
import SignIn from './Authorization/SignIn.js';
import Signup from './Authorization/Signup.js';

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
      <body>
            <Router>
                <Header token={this.state.token} logout={this.clearToken} />
                <Switch>
                    <Route 
                        path="/" 
                        exact
                        render={(routerProps) => <Home {...routerProps} />} 
                    />
                    <Route 
                        path="/login" 
                        exact
                        render={(routerProps) => <SignIn handleToken={this.handleToken} token={this.state.token} {...routerProps} />} 
                    />
                    <Route 
                        path="/signup" 
                        exact
                        render={(routerProps) => <Signup handleToken={this.handleToken} token={this.state.token} {...routerProps} />} 
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
    )
  }
}

export default App;
