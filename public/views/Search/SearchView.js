import React from 'react';
import Nav from './../Nav/Nav';
import PhotoGrid from './../Profile/Photogrid';

export default class SearchView extends React.Component{
  render(){
    return (
      <div>
        <Nav/>
        <h3>the #tag that was searched</h3>
        <p>number of posts/results</p>
        <PhotoGrid/>

      </div>
    )
  }
}