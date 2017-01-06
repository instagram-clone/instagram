import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Footer from './Footer';
import Carousel from './Carousel';

import axios from 'axios';

export default class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: false,
        }
    }
    toggleLogin() {
        this.setState({
            showLogin: !this.state.showLogin
        });
    }
    render() {
        return (
            <div className='loginView'>
                <main>
                    <div className='left'>
                        <Carousel />
                    </div>
                    <div className='right'>
                        {this.state.showLogin ? <LoginForm/> : <SignupForm/>}
                        <div className='switchFormContainer'>
                            {this.state.showLogin ? "Don't have an account?" : "Have an account?"}
                            <a onClick={this.toggleLogin.bind(this)}>
                                {this.state.showLogin ? " Sign up" : " Log in"}
                            </a>
                        </div>
                        <div className={`appLinks ${this.state.showLogin ? "loginSpacing" : null}`}>
                            <span className='appText'>Get the app.</span>
                            <div className='appImagesContainer'>
                                <a href='#'>
                                    <img src='https://instagramstatic-a.akamaihd.net/h1/images/appstore-install-badges/badge_ios_english-en.png/4b70f6fae447.png'/>
                                </a>
                                <a href='#' className='android'>
                                    <img src='https://instagramstatic-a.akamaihd.net/h1/images/appstore-install-badges/english_get.png/74c874cf7dc5.png'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
                <span className='loginFooter'>
                    <Footer/>
                </span>
            </div>
        )
    }
};
