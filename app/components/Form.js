import React from 'react';
import * as constants from '../constants/constants'
import { withRouter, Redirect} from 'react-router-dom';



class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    };
    handleUserInput(e) {
        this.setState({
            [e.target.name]: e.target.value,
            validUser: false
        });
    };

    submitHandler(e) {
        e.preventDefault();
        (this.state.email === constants.email && this.state.password === constants.password) ? this.props.history.push('/home') : '';
    }

    render() {        
        return(
            <form onSubmit={this.submitHandler}>
                <div>{ this.state.validUser ? '' : 'You are not a valid user' }</div>
                <h2>Sign up Form</h2>
                <div>
                    <label>Email Address</label>
                </div>
                <div>
                    <input type="email" name="email" placeholder="Enter email address.." value={this.state.email} onChange={this.handleUserInput} />
                </div>
                <br />
                <div>
                    <label>Password</label>
                </div>
                <div>
                    <input type="password" name="password" placeholder="Enter email password.." value={this.state.password}  onChange={this.handleUserInput} />
                </div>
                <br />
                <div>
                    <button type="submit">Submit</button>
                </div>                

            </form>
        )
    }
}

export default withRouter(Form);