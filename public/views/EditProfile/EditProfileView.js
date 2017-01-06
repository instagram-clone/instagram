import React from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import getLoggedInUser from '../../utils/getLoggedInUser';
import Cookies from 'js-cookie';
import { Link } from "react-router";
import Footer from '../Login/Footer';
import { connect } from 'react-redux';
import { addUser } from '../../ducks/userDuck';

class EditProfileView extends React.Component{
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

  updateProfile(){
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
      }

      this.props.dispatch(addUser(response.data));
      window.location.href = '#/profile/' + this.state.username;
    })
  }

  handleSubmitChange(event){
    event.preventDefault();
      console.log('HELLOOO');


      if (this.state.profilepic === ''){

        this.setState({profilepic: 'https://scontent-fra3-1.cdninstagram.com/t51.2885-19/11906329_960233084022564_1448528159_a.jpg'}, () => {
          this.updateProfile();
        })

      } else {
        this.updateProfile();
      }
  }


  componentDidMount(){
    const username = getLoggedInUser.getLoggedInUser().username;
        axios.get('/api/currentUser/' + username).then(response => {
        console.log(response);
        this.setState(response.data);
    })
  }



  render(){
    console.log(this.props.storeUser);
    return(


      <div className="editProfileViewMain">
      <Nav/>
      <div className="editProfileContainer">

        <div className="editProfileLinks">
          <ul>
            <li className="ulLink ulEditProfile"><a>Edit Profile</a></li>
            <li className="ulLink"><Link to="/changePassword">Change Password</Link></li>
          </ul>
        </div>


        <div className="editProfileContents">
          <div className="editProfileUsername">
            <img className="profilePic" height="20" width="20" alt="" src={this.state.profilepic}/>{this.state.username}
          </div>

          <form className="editForm">
          <div className="formItem">


          </div>



          <div className="formItem">
          <div className="formName">
            Name
          </div>
            <input value={this.state.fullname} onChange={this.handleNameChange.bind(this)} type="text"/>
          </div>


          <div className="formItem">
          <div className="formName">
            Username
          </div>
            <input value={this.state.username} onChange={this.handleUsernameChange.bind(this)} type="text"/>
          </div>

          <div className="formItem">
          <div className="formName">
            Profile Image
          </div>
            <input value={this.state.profilepic} onChange={this.handleProfilePicChange.bind(this)} type="text"/>
          </div>



          <div className="formItem">
          <div className="formName">
            Website
          </div>
             <input value={this.state.website} onChange={this.handleWebsiteChange.bind(this)} type="text"/>
          </div>

          <div className="formItem">
          <div className="formName">
            Bio
          </div>
            <input className="bioInput" value={this.state.bio} onChange={this.handleBioChange.bind(this)} type="text"/>
          </div>
          <div className="formItem privateInfo">
          PRIVATE INFORMATION
          </div>

          <div className="formItem">
          <div className="formName">
            Email
          </div>
             <input value={this.state.contact} onChange={this.handleEmailChange.bind(this)} type="text"/>
          </div>

          <div className="formItemGender">
          <div className="genderTitle">
          Gender
          </div>
          <div className="genderHolder">
            <select className="genderDrop" value={this.state.gender} onChange={this.handleGenderChange.bind(this)} name="gender">
            <option value="Not Specified">Not Specified</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          </div>
          </div>

          <div className="formItemBtn">
            <button className="submitBtn submitBtnPass"  onClick={this.handleSubmitChange.bind(this)}>Submit</button>

            <a className="disableAcc" href="#">Temporarily disable my account</a>
          </div>
          </form>
        </div>

      </div>
      <Footer/>
      </div>


    )
  }
}

export default connect(state => ({storeUser: state.storeUser}))(EditProfileView);
