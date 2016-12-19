import React from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import Cookies from 'js-cookie';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleUserNameChange(event) {
        // console.log(event.target.value);
        this.setState({username: event.target.value});
    }

    handlePassWordChange(event) {
        // console.log(event.target.value);
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.username);
        console.log(this.state.password);

        axios.get('/api/login?username=' + this.state.username).then((response) => {
            console.log(response);
            if (response.data.length === 0) {
                alert('No user found');
            } else {
                bcrypt.compare(this.state.password, response.data[0].password, function(err, res) {
                    if (res) {
                        Cookies.set('user', {
                            username: response.data.username
                        }, {
                            expires: 1,
                            path: '/'
                        });
                        window.location.href = '#/feed'
                    } else {
                        alert('Incorrect password and username combination');
                    }
                })
            }
        });
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
