import React from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import ReactS3Uploader from 'react-s3-uploader';
import PhotoPreview from './PhotoPreview';

export default class UploadView extends React.Component{
  onProgress(){
    
  }
  onError(){

  }
  handleFinish(){
    axios.get('/s3/img/(.*)').then( data => {
      console.log(data);
    });
  }
  render(){
    return(
      <div>
        <Nav/>
        <div className="upload">
          <br />
          <h1>Upload</h1>
          <br />
          <br/>
            <ReactS3Uploader id="picinput"
              signingUrl='/s3/sign'
              accept="image/*"
              onFinish={this.handleFinish.bind(this)}
            />
        </div>
        <PhotoPreview />
      </div>
    )
  }
}
