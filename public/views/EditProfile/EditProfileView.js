import React from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import getLoggedInUser from '../../utils/getLoggedInUser';


export default class EditProfileView extends React.Component{
  constructor(){
    super();
    this.state={
      fullname: '',
      username: '',
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
    this.setState({email: event.target.value});
  }

  handleNumberChange(event){
    console.log(event.target.value);
    this.setState({number: event.target.value});
  }

  handleSubmitChange(event){
    event.preventDefault();
    axios.post('/api/currentUser', this.state).then(response => {
      console.log(response);
    })
  }

  componentWillMount(){
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
        <h2>This is the Edit Profile View!</h2>

      <div>
      <img height="20" width="20" alt="" src="https://instagram.faqa1-1.fna.fbcdn.net/t51.2885-19/11906329_960233084022564_1448528159_a.jpg"/>USERNAME HERE
      </div>

      <div>
      Name <input value={this.state.fullname} onChange={this.handleNameChange.bind(this)} type="text"/>
      </div>

      <div>
      Username <input value={this.state.username} onChange={this.handleUsernameChange.bind(this)} type="text"/>
      </div>

      <div>
      Website <input onChange={this.handleWebsiteChange.bind(this)} type="text"/>
      </div>

      <div>
      Bio <input onChange={this.handleBioChange.bind(this)} type="text"/>
      </div>

      PRIVATE INFORMATION

      <div>
      Email <input onChange={this.handleEmailChange.bind(this)} type="text"/>
      </div>

      <div>
      Phone Number <input onChange={this.handleNumberChange.bind(this)} type="number"/>
      </div>

      <div>
      Gender
      <select name="gender">
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
    )
  }
}
