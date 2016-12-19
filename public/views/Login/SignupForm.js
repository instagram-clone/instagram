import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import config from '../../../config';
import Cookies from 'js-cookie';

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

	handleSubmit(event){
        event.preventDefault();
        console.log('submitting');
        bcrypt.hash(this.state.password, 10, (err, hash) =>{
            console.log(this.state.username);
            axios.post(`/api/signup`, {
                contact: this.state.contact,
                fullname: this.state.fullname,
                username: this.state.username,
                password: hash,
            }).then((response) => {
                console.log('setting cookie');
                console.log(response.data);
                Cookies.set('user', {
                    username: response.data.username
                }, {
                    expires: 1,
                    path: '/'
                });
                window.location.href = '#/feed';
            }).catch(function(err){
                console.log(err);
                if(err){
                    alert('That username is already taken.');
                }
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
                    <form action='/auth/facebook'>
                        <button className='button'>
                            <span className='facebookSprite'></span>
                            Log in with Facebook
                        </button>
                    </form>
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
