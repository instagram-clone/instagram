import React from 'react';

export default class PhotoPreview extends React.Component{
    render(){
        return(
            <div className="preview">
            {
                this.props.url ? <img src={this.props.url}/> : <h1>Preview of the photo</h1>
            }
            </div>
        )
    }
}