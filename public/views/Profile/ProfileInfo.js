import React from 'react';

export default class ProfileInfo extends React.Component{
  constructor(props){
    super(props);
    this.state ={
    }
  }
  componentWillMount(){

  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps, "this is the child");
  }
  render(){
    return(
      <div>
        Here is the profile info!
        <div>
          <div>{this.props.username}</div>
          <img src={this.props.profilepic}/>
        </div>
      </div>
    )
  }
}
