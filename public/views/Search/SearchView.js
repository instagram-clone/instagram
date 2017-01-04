import React from 'react';
import Nav from './../Nav/Nav';
import PhotoGrid from './../Profile/Photogrid';

export default class SearchView extends React.Component{
  render(){
    return (
      <div>
        <Nav />
        <h1>{this.props.params.searchTerm}</h1>
      </div>
    )
  }
}
