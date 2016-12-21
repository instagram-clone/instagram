import React from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import ReactS3Uploader from 'react-s3-uploader';
import PhotoPreview from './PhotoPreview';
import {getLoggedInUser} from '../../utils/getLoggedInUser';

export default class UploadView extends React.Component {
    constructor() {
        super();
        this.state = {
            displayPreview: false
        }
    }

    handleCaptionChange(e) {
        this.setState({caption: e.target.value});
        console.log(this.state.caption);
    }

    handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
        console.log(file);

        this.setState({date: file.lastModifiedDate});

        reader.onloadend = (loadEvent) => {
            this.setState({file: file, imgUrl: reader.result});
            const newImage = {
                imageName: file.name,
                imageBody: loadEvent.target.result,
                imageExtension: file.type
            }
            axios.post('/api/s3', newImage).then((response) => {
                console.log(response);
                this.setState({
                    imgUrl: response.data.Location,
                    displayPreview: true
                });
            });
        }

        reader.readAsDataURL(file)
    }

    handleSubmit(e) {
        this.setState({author: getLoggedInUser().username})
        //had to use settimeout because otherwise the
        //post would be made before the author name was set
        window.setTimeout(() => {
            axios.post('/api/postPhoto', {data: this.state}).then(response => {
                if (response.status === 200) {
                    window.location.href = '/#/feed';
                }
            });
        }, 1000);
    }

    render() {
        return (
            <div>
                <Nav/>
                <div className='uploadView'>
                    {this.state.displayPreview ? null : <div className="upload">
                        <div className='uploadHeader'>Upload</div>
                        <label for='file-upload' className='button buttonClear'>
                            <input id='file-upload' type="file" onChange={this.handleImageChange.bind(this)}/>
                            Choose Photo
                        </label>
                    </div>}
                    {this.state.displayPreview ? <div className='submitArea'>
                        <input type='text' className='caption' placeholder='Write a caption...' onChange={this.handleCaptionChange.bind(this)}/>
                        <button className='button buttonClear' onClick={this.handleSubmit.bind(this)}>Post</button>
                    </div> : null}
                    {this.state.displayPreview ? <PhotoPreview url={this.state.imgUrl}/> : null }
                </div>
            </div>
        )
    }
}
