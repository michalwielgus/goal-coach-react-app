import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';


class SignUp extends Component {
    
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
    
    signUp() {
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(error => {
            console.log(error);
            this.setState({error});
        })
    }
    
    render() {
        console.log(this.state);
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
                            onClick={() => this.signUp()}    
                    >
                    Sign Up</button>
                </div>
                <div>
                    {this.state.error.message}
                </div>
                <div>
                    <Link to={'/signin'}>Already have account? Sign in here!</Link>
                </div>
            </div>
        )
    }
}

export default SignUp;
