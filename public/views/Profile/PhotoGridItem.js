import React from 'react';

export default class PhotoGridItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var bgImg = {
            backgroundImage: 'url(' + this.props.photourl + ')',
            backgroundSize: 'cover',
            width: '293px',
            height: '293px',
            backgroundPosition: 'center'
        }
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
                    <div style={bgImg}></div>
                </figure>
            </div>
        )
    }
}
