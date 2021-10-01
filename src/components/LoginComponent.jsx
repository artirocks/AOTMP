import React, { Component } from 'react';

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user:'',
            pass:''
        }

        this.changeUserHandler = this.changeUserHandler.bind(this);
        this.changePassHandler = this.changePassHandler.bind(this);
    }

    changeUserHandler = (event) => {
        this.setState({ user: event.target.value });
    }
    changePassHandler = (event) => {
        this.setState({ pass: event.target.value });
    }
    

    goToMenu() {
        
        if(this.state.user == "sumitrairkt@gmail.com" && this.state.pass == "rackson12345") {
            this.props.history.push('/menu');
        }

        else {
            alert("Username or password is incorrect. Please enter valid details!")
        }
        
    }

    render() {
        return (
            <div>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Please Login With Your Credentials</h3>
                            <div className="card-body">

                                <form>
                                    <div className="form-group">
                                        <label> Email ID: </label>
                                        <input placeholder="Email Address" name="emailID" className="form-control"
                                        value={this.state.user} onChange={this.changeUserHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label> Password: </label>
                                        <input type = "password" placeholder="Password" name="password" className="form-control"
                                        value={this.state.pass} onChange={this.changePassHandler}/>
                                    </div>

                                    <button className="btn btn-success" style={{margin:"10px"}} onClick={() => this.goToMenu()}> Submit </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            </div>
        );
    }
}

export default LoginComponent;