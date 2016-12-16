import React from 'react';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUserNameChange(event) {
        console.log(event.target.value);
        this.setState({username: event.target.value});
    }

	handlePassWordChange(event) {
		console.log(event.target.value);
		this.setState({password: event.target.value});
	}

	handleSubmit(){
		console.log(this.state.username);
		console.log(this.state.password);
	}

    render() {
        return (
            <div className="login">
                <input onChange={event => this.handleUserNameChange(event)} type="text" placeholder="Username"/>
                <input onChange={event => this.handlePassWordChange(event)} type="password" placeholder="Password"/>
                <button onClick={() => this.handleSubmit()}>Log in</button>

            </div>
        )
    }
}
