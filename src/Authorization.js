import React from 'react';
import { signUp, signIn } from './todo-api.js';

class Authorization extends React.Component {
    state = {
        signInEmail: '',
        signInPassword: '',
        signUpEmail: '',
        signUpPassword: ''
    }
    
    handleSignIn = async (e) => {
        e.preventDefault();

        const user = await signIn({
            email: this.state.signInEmail,
            password: this.state.signInPassword
        });

        this.props.handleToken(user.body.token);
        this.props.history.push('/todo')
    }

    handleSignUp = async (e) => {
        e.preventDefault();

        const user = await signUp({
            email: this.state.signUpEmail,
            password: this.state.signUpPassword
        });

        this.props.handleToken(user.body.token);
        this.props.history.push('/todo')
    }

    render() { 
        return (
            <div>
                <form onSubmit={this.handleSignIn}>
                    Sign In?
                    <label>
                        Email
                        <input type='email' autocomplete="username" onChange={e => this.setState({ signInEmail: e.target.value })} value={this.state.signInEmail}/>
                    </label>
                    <label>
                        Password
                        <input type="password" autocomplete="current-password" onChange={e => this.setState({ signInPassword: e.target.value })} value={ this.state.signInPassword}/>
                    </label>
                    <button>Submit</button>
                </form>
                <form onSubmit={this.handleSignUp}>
                    Sign Up?
                    <label>
                        Email
                        <input type='email' autocomplete="username" onChange={e => this.setState({ signUpEmail: e.target.value })} value={this.state.signUpEmail}/>
                    </label>
                    <label>
                        Password
                        <input type="password" autocomplete="current-password" onChange={e => this.setState({ signUpPassword: e.target.value })} value={ this.state.signUpPassword}/>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
 
export default Authorization;