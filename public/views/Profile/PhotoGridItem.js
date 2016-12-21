import React from 'react';

export default class PhotoGridItem extends React.Component{
  componentWillReceiveProps(nextProps){
    console.log(nextProps, 'grid item');
  }
  render(){
    return(
      <div className="picItem">
        photo goes here
      </div>
    )
  }
}