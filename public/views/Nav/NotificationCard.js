import React from 'react';

export default class NotificationCard extends React.Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }
  componentWillMount(){
    console.log('stuff');
  }
  render(){
    console.log('notification card', this.props);
    return (
      <div>
        <h1>Test</h1>
      </div>
    )
  }
} 