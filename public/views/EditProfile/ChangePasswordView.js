import React from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import getLoggedInUser from '../../utils/getLoggedInUser';
import bcrypt from 'bcryptjs';
import Cookies from 'js-cookie';
import { Link } from "react-router";
import Footer from '../Login/Footer';


export default class EditProfileView extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            profilepic: getLoggedInUser.getLoggedInUser().profilepic,
            username: getLoggedInUser.getLoggedInUser().username,
            newpassword1: '',
            newpassword2: '',
        };
    }

    handleOldPassword(event) {
        console.log(event.target.value);
        this.setState({
            oldpassword: event.target.value
        });
    }

    newPassword1(event) {
        console.log(event.target.value);
        this.setState({
            newpassword1: event.target.value
        });
    }

    newPassword2(event) {
        console.log(event.target.value);
        this.setState({
            newpassword2: event.target.value
        });
    }

    handleSubmitPassword(event) {
        event.preventDefault();
            axios.get('/api/login?username=' + this.state.username).then((response) => {
                console.log(response);
                const userid = response.data[0]._id;
                bcrypt.compare(this.state.oldpassword, response.data[0].password, (err, res) => {
                    console.log(response.data);
                    console.log(res);

                    if(res && this.state.newpassword1 === this.state.newpassword2){
                      console.log('Res should happen');

                      bcrypt.hash(this.state.newpassword1, 10, (err, hash) => {
                        axios.post(`/api/changePassword`, {
                          password: hash,
                          id: userid,
                        }).then((response) => {
                          console.log('Changing password...');
                          console.log(response);
                        })
                      })
                    } else {
                      console.log('nope');
                    }
                })
            });
    }

    componentDidMount() {
        const username = getLoggedInUser.getLoggedInUser().username;
        axios.get('/api/currentUser/' + username).then(response => {
            this.setState({
              profilepic: response.data.profilepic
            });
        })
    }


    render(){
      return(

        <div className="editProfileViewMain">
        <Nav/>

        <div className="editProfileContainer">

          <div className="editProfileLinks">
            <ul>
              <li className="ulLink"><Link to="editProfile">Edit Profile</Link></li>
              <li className="ulLink ulEditProfile">Change Password</li>
            </ul>
          </div>


          <div className="editProfileContents">

          <div className="usernamePass">
            <img className="profilePic" height="20" width="20" alt="" src={this.state.profilepic}/>{this.state.username}
          </div>

          <form className="editForm">

          <div className="formPassItem oldPassword">
          <div className="formPassName">
            Old Password
          </div>
          <input className="passInput" onChange = {this.handleOldPassword.bind(this)} type = "text"/>
          </div>

          <div className="formPassItem">
          <div className="formPassName">
            New Password
          </div>
          <input className="passInput" onChange = {this.newPassword1.bind(this)} type = "text"/>
          </div>

          <div className="formPassItem">
          <div className="formPassName passName">
            New Password, Again
          </div>
          <input className = "passInput" onChange = {this.newPassword2.bind(this)} type = "text"/>
          </div>


          <div className="formItemPassBtn">
          <button className="submitBtn"
          onClick={this.handleSubmitPassword.bind(this)}>Change Password</button>
          </div>

          </form>




          </div>

        </div>
        <Footer/>
        </div>
      )
    }
}
