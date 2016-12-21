import React from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import ReactS3Uploader from 'react-s3-uploader';
import PhotoPreview from './PhotoPreview';
import {getLoggedInUser} from '../../utils/getLoggedInUser';

export default class UploadView extends React.Component {
    constructor() {
        super();
        this.state = {}
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

        this.setState({
            date: file.lastModifiedDate
        });

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
                });
            });
        }

        reader.readAsDataURL(file)
    }
    handleSubmit(e){
        this.setState({
            author: getLoggedInUser().username
        })

        //had to use settimeout because otherwise the
        //post would be made before the author name was set
        window.setTimeout(() => {
            axios.post('/api/postPhoto', {
                data : this.state
            }).then(response => {
                if(response.status === 200){
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
                    <div className="upload">
                        <div className='uploadHeader'>Upload</div>
                        <input type="file" onChange={this.handleImageChange.bind(this)}/>
                    </div>
                    <PhotoPreview url={this.state.imgUrl}/>
                    <input className='caption' placeholder='caption' onChange={this.handleCaptionChange.bind(this)}/>
                    <button className='button' onClick={this.handleSubmit.bind(this)}>Post</button>
                </div>
            </div>
        )
    }
}
