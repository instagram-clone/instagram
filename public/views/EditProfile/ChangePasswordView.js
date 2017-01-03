import React from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import getLoggedInUser from '../../utils/getLoggedInUser';
import bcrypt from 'bcryptjs';


export default class EditProfileView extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            profilepic: '',
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
            console.log(response);
        })
    }


    render() {
        return(

            <div>

            <Nav/>
            <h2> This is the Change Password View! </h2>

            <div>
            <img height="20" width="20" alt="" src={this.state.profilepic}/>{this.state.username} </div>

            <div>
            Old Password <input onChange = {this.handleOldPassword.bind(this)} type = "text"/>
            </div>
            <div>
            New Password
            <input onChange = {this.newPassword1.bind(this)} type = "text"/>
            </div>
            <div>
            New Password, Again
            <input onChange = {this.newPassword2.bind(this)} type = "text"/>
            </div>
            <button onClick = {this.handleSubmitPassword.bind(this)}> Change Password </button>
            </div>
        )
    }
}
