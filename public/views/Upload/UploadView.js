import React from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';

export default class UploadView extends React.Component{
  handleChange(event){
    console.log('changed');
    var reader = new FileReader();
    console.log(reader);
    reader.onloadstart = function(loadEvent) {
      console.log("loadstart");
    }  
        reader.onloadend = function (loadEvent) {
          var fileread = loadEvent.target.result;
          console.log(fileread);

          var tempArray = elem['context'].value.split('\\');
          var fileName = tempArray[tempArray.length - 1];

          var imageExtension = fileread.split(';')[0].split('/');
          imageExtension = imageExtension[imageExtension.length - 1];

          var newImage = {
            imageName: fileName,
            imageBody: fileread,
            imageExtension: imageExtension,
            userEmail: 'obama@usa.gov'
          }
          console.log(newImage);

          return axios.post('/api/s3', newImage).then(function(response){
            console.log(response.data);  
          })
        }
  }
  render(){
    return(
      <div>
        <Nav/>
        <h1>This is the Upload View!</h1>
    <input type="file" onChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
}
