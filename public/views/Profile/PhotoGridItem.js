import React from 'react';

export default class PhotoGridItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="picItem" onClick={() => {
                this.props.testFunc(this.props)
            }}>
                <div className="hover-box">
                    <div id="icon-box">
                        <div className="likeSprite"></div>
                        <p>{this.props.likes.length}</p>
                        <div className="commentSprite"></div>
                        <p>{this.props.comments.length}</p>
                    </div>
                </div>
                <figure id="imgPost" className={this.props.filter}>
                    <img className='photo' src={this.props.photourl} />
                </figure>
            </div>
        )
    }
}
