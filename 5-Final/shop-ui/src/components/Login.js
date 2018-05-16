import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-6 col-md-6">
                        <div className="card">
                            <div className="card-header"> Login Form</div>
                            <div className="card-body">
                                <form >
                                    <div className="form-group">
                                        <label>username</label>
                                        <input className="form-control" id="username" />
                                    </div>
                                    <div className="form-group">
                                        <label>password</label>
                                        <input type="password" className="form-control" id="password" />
                                    </div>
                                    <button className="btn btn-primary" >Login</button>
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