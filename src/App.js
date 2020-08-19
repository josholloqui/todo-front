import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
  Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import Authorization from './Authorization.js';
import TodoList from './TodoList.js';

class App extends React.Component {
  render() { 
    return (
      <>
      <body>
            <Router>
                <header>
                  {/* <Header /> */}
                  <nav>
                    <Link className="navLinks" to="/">Home</Link>
                    <Link className="navLinks" to="/todo">Admin</Link>
                  </nav>
                </header>
                <Switch>
                    <Route 
                        path="/" 
                        exact
                        render={(routerProps) => <Home {...routerProps} />} 
                    />
                    <Route 
                        path="/auth" 
                        exact
                        render={(routerProps) => <Authorization {...routerProps} />} 
                    />
                    <Route 
                        path="/todo" 
                        exact
                        render={(routerProps) => <TodoList {...routerProps} />} 
                    />
                </Switch>
                {/* <Footer /> */}
            </Router>
        </body>
        </>
    )
  }
}

export default App;
