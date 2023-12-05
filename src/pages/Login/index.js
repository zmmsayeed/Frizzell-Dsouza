import React, { Component } from 'react';

// Importing the stylesheet
import './style.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    submitLogin = (event) => {
        event.preventDefault();
        console.log("Submitting the login page: ", this.state.username, this.state.password)

        //call the login API
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center align-items-center" style={{ height: "100vh" }}>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={this.submitLogin}>
                                    <h3 className="text-center mb-4">Login</h3>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" className="form-control" placeholder="Enter username" name="username"
                                            value={this.state.username} onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Enter password" name="password"
                                            value={this.state.password} onChange={this.onChange}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                                    <button type="reset" className="btn btn-secondary btn-block">Reset</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
