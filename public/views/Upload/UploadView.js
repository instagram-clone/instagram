import React from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import ReactS3Uploader from 'react-s3-uploader';

export default class UploadView extends React.Component{
  onProgress(){
    console.log(onProgress);
  }
  onError(){

  }
  render(){
    return(
      <div>
        <Nav/>
        <h1>This is the Upload View!</h1>
        <ReactS3Uploader 
          signingUrl='/s3/sign'
          accept="image/*"
          />
      </div>
    )
  }
}
