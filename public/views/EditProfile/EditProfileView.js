import React from 'react';
import Nav from '../Nav/Nav';

export default class EditProfileView extends React.Component{

  handleNameChange(event){
    console.log(event.target.value);
    this.setState({name: event.target.value});
  }

  handleUsernameChange(event){
    console.log(event.target.value);
    this.setState({username: event.target.value});
  }

  handleEmailChange(event){
    console.log(event.target.value);
    this.setState({email: event.target.value});
  }

  handleBioChange(event){
    console.log(event.target.value);
    this.setState({bio: event.target.value});
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
      <span>Name <input onChange={this.handleNameChange.bind(this)} type="text"/></span>
      </div>

      <div>
      Username <input onChange={this.handleUsernameChange.bind(this)} type="text"/>
      </div>

      <div>
      Website <input onChange={this.handleEmailChange.bind(this)} type="text"/>
      </div>

      <div>
      Bio <input onChange={this.handleBioChange.bind(this)} type="text"/>
      </div>

      PRIVATE INFORMATION

      <div>
      Email <input/>
      </div>

      <div>
      Phone Number <input/>
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
      <button>Submit</button><a href="#">Temporarily disable my account</a>
      </div>

      </div>
    )
  }
}
