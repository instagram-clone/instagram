import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Footer from './Footer';

export default class LoginView extends React.Component{
  render(){
    return(
      <div>
        <h1>This is the login view!</h1>
        <LoginForm />
		<SignupForm />
		<Footer />
      </div>
    )
  }
};
