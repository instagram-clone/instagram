import React from 'react';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
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
            <div className='login'>
                <h1 className='spriteLogo'></h1>
                <form>
                    <input onChange={this.handleUserNameChange.bind(this)} type="text" placeholder="Username"/>
                    <input onChange={this.handlePassWordChange.bind(this)} type="password" placeholder="Password"/>
                    <button className='button' onClick={this.handleSubmit.bind(this)}>Log in</button>
                </form>
            </div>
        )
    }
}
