import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import bcrypt from 'bcryptjs';

export default class SignupForm extends React.Component {
    constructor(props) {
        super(props);
    }

	handleContactChange(event){
		console.log(event.target.value);
		this.setState({contact: event.target.value});
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
		console.log(this.state.contact);
		console.log(this.state.fullname);
		console.log(this.state.username);
		console.log(this.state.password);
        bcrypt.hash(this.state.password, 10, function(err, hash){
            axios.post(`/api/signup`, {
                contact: this.state.contact,
                fullname: this.state.fullname,
                username: this.state.username,
                password: hash,
            })
        })

	}

    render() {
        return (
            <div className='signup'>
                <h1 className='spriteLogo'></h1>
                <div className='subHead'>
                    Sign up to see photos and videos from your friends.
                </div>
                <form>
                    <button className='button'>
                        <span className='facebookSprite'></span>
                        Log in with Facebook
                    </button>
                    <div className='split'>
                        <div className='line lineLeft'></div>
                        <div>OR</div>
                        <div className='line lineRight'></div>
                    </div>
    				<input onChange={this.handleContactChange.bind(this)} type="text" placeholder="Mobile Number or Email"/>
    				<input onChange={this.handleFullNameChange.bind(this)} type="text" placeholder="Full Name"/>
                    <input onChange={this.handleUserNameChange.bind(this)} type="text" placeholder="Username"/>
                    <input onChange={this.handlePassWordChange.bind(this)} type="password" placeholder="Password"/>
                    <button className='button' onClick={this.handleSubmit.bind(this)}>Sign up</button>
                    <div className='loginFooter'>
                        By signing up, you agree to our <Link to='#'>Terms</Link> & <Link to='#'>Privacy Policy</Link>
                    </div>
                </form>

            </div>
        )
    }
}
