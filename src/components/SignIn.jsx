import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';


class SignIn extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }
    
    signIn() {
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(error => {
            this.setState({error});
        })
    }
    
    render() {
        return(
            <div className="signup">
                <div className="input-group">
                    <input type="text"
                           className="form-control"
                           onChange={event => this.setState({email: event.target.value})}
                           placeholder="email"
                    />
                    <input type="password"
                           className="form-control"
                           onChange={event=> this.setState({password: event.target.value})}
                           placeholder="password"
                    />
                    <button className="form-control btn btn-primary"    
                            onClick={() => this.signIn()}    
                    >
                    Sign In</button>
                </div>
                <div>
                    {this.state.error.message}
                </div>
                <div>
                    <Link to={'/signup'}>Don't have account? Register now!</Link>
                </div>
            </div>
        )
    }
}

export default SignIn;
