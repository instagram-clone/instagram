import React from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import ReactS3Uploader from 'react-s3-uploader';
import PhotoPreview from './PhotoPreview';

export default class UploadView extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  }
  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    console.log(file);

    reader.onloadend = (loadEvent) => {
      this.setState({
        file: file,
        imgUrl: reader.result
      });
      const newImage = {
        imageName: file.name,
        imageBody: loadEvent.target.result,
        imageExtension: file.type
      }
      axios.post('/api/s3', newImage).then((response) => {
        console.log(response);
        this.setState({
          imgUrl: response.data.Location,
        })
      });
    }

    reader.readAsDataURL(file)
  }
  render(){
    return(
      <div>
        <Nav/>
        <div className="upload">
          <br />
          <h1>Upload</h1>
          <br/>
          <br/>
            <input type="file" onChange={this.handleImageChange.bind(this)}/>
        </div>
        <PhotoPreview url={this.state.imgUrl}/>
      </div>
    )
  }
}
