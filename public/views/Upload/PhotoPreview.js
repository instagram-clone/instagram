import React from 'react';

export default class PhotoPreview extends React.Component {
    render() {
        return (
            <div className="preview">
                {this.props.url
                    ? <figure className={this.props.filter}><img src={this.props.url}/></figure>
                    : <h1>Photo</h1>
                }
            </div>
        )
    }
}
