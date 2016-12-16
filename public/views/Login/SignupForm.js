import React from 'react';

export default class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			mobile: '',
			fullname: '',
            username: '',
            password: ''
        }
    }

	handleContactChange(event){
		console.log(event.target.value);
		this.setState({mobile: event.target.value});
	}

	handleFullNameChange(event){
		console.log(event.target.value);
		this.setState({fullname: event.target.value});
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
		console.log(this.state.mobile);
		console.log(this.state.fullname);
		console.log(this.state.username);
		console.log(this.state.password);
	}

    render() {
        return (
            <div className="signup">
				<input onChange={event => this.handleContactChange(event)} type="text" placeholder="Mobile Number or Email"/>
				<input onChange={event => this.handleFullNameChange(event)} type="text" placeholder="Full Name"/>
                <input onChange={event => this.handleUserNameChange(event)} type="text" placeholder="Username"/>
                <input onChange={event => this.handlePassWordChange(event)} type="password" placeholder="Password"/>
                <button onClick={() => this.handleSubmit()}>Log in</button>

            </div>
        )
    }
}
