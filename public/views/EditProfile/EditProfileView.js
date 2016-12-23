import React from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import getLoggedInUser from '../../utils/getLoggedInUser';
import Cookies from 'js-cookie';


export default class EditProfileView extends React.Component{
  constructor(){
    super();
    this.state={
      fullname: '',
      username: '',
      website: '',
      bio: '',
      contact: '',
      gender: '',
      profilepic: '',
      initialprofilepic: getLoggedInUser.getLoggedInUser().profilepic,
      initialusername: getLoggedInUser.getLoggedInUser().username,
    };
  }
  handleNameChange(event){
    console.log(event.target.value);
    this.setState({fullname: event.target.value});
  }

  handleUsernameChange(event){
    console.log(event.target.value);
    this.setState({username: event.target.value});
  }

  handleWebsiteChange(event){
    console.log(event.target.value);
    this.setState({website: event.target.value});
  }

  handleBioChange(event){
    console.log(event.target.value);
    this.setState({bio: event.target.value});
  }

  handleEmailChange(event){
    console.log(event.target.value);
    this.setState({contact: event.target.value});
  }

  handleGenderChange(event){
    console.log(event.target.value);
    this.setState({gender: event.target.value});
  }

  handleProfilePicChange(event){
    console.log(event.target.value);
    this.setState({profilepic: event.target.value});
  }

  handleSubmitChange(event){
    event.preventDefault();
      console.log('HELLOOO');

    axios.post('/api/currentUser', this.state).then(response => {
      console.log(response);
      console.log('1');

      if (this.state.username !== this.state.initialusername) {
          Cookies.remove('user');
          console.log(this.state.username);
          Cookies.set('user', {
              username: this.state.username
          }, {
              expires: 1,
              path: '/'
          });

      } else {

      }

    })
    window.location.href = '#/profile/' + this.state.username;
  }


  componentDidMount(){
    const username = getLoggedInUser.getLoggedInUser().username;
        axios.get('/api/currentUser/' + username).then(response => {
        console.log(response);
        this.setState(response.data);
    })
  }



  render(){
    return(

      <div>
      <Nav/>

      <div className="editProfileContainer">

        <div className="editProfileLinks">
          <ul>
            <li className="ulLink"><a>Edit Profile</a></li>
            <li className="ulLink"><a>Change Password</a></li>
          </ul>
        </div>


        <div className="editProfileContents">
          <div>
            <img className="profilePic" height="20" width="20" alt="" src={this.state.profilepic}/>{this.state.username}
          </div>

          <div>
            Name <input value={this.state.fullname} onChange={this.handleNameChange.bind(this)} type="text"/>
          </div>

          <div>
            Username <input value={this.state.username} onChange={this.handleUsernameChange.bind(this)} type="text"/>
          </div>

          <div>
            Profile Image <input onChange={this.handleProfilePicChange.bind(this)} type="text"/>
          </div>

          <div>
            Website <input value={this.state.website} onChange={this.handleWebsiteChange.bind(this)} type="text"/>
          </div>

          <div>
            Bio <input className="bioInput" value={this.state.bio} onChange={this.handleBioChange.bind(this)} type="text"/>
          </div>

          PRIVATE INFORMATION

          <div>
            Email <input value={this.state.contact} onChange={this.handleEmailChange.bind(this)} type="text"/>
          </div>

          <div>
            Gender
            <select value={this.state.gender} onChange={this.handleGenderChange.bind(this)} name="gender">
            <option value="Not Specified">Not Specified</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          </div>

          <div>
            Similar Account Suggestions
            <input type="checkbox"/>
            Include your account when recommending similar accounts people might want to follow.<a href="#">[?]</a>
          </div>

          <div>
            <button onClick={this.handleSubmitChange.bind(this)}>Submit</button><a href="#">Temporarily disable my account</a>
          </div>
        </div>

      </div>

      </div>
    )
  }
}
