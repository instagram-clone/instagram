import React from 'react';


export default class PhotoGridItem extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    var bgImg = {
      backgroundImage: 'url(' + this.props.photourl +')',
      backgroundSize: 'cover',
      width: '293px',
      height: '293px',
      backgroundPosition: 'center'
    }
    return(
      <div className="picItem">
        <div className="hover-box">
        <div id="icon-box">
        <div id="bg">
        </div>
          <img className="img-icon" src="http://www.pngall.com/wp-content/uploads/2016/04/Instagram-Heart-PNG.png"/>
          <p>{this.props.likes.length}</p>
          <img className="img-icon" src="https://d30y9cdsu7xlg0.cloudfront.net/png/2792-200.png"/>
          <p>{this.props.comments.length}</p>
          </div>
        </div>
        <figure id="imgPost" className={this.props.filter} >
          <div style={bgImg}>
          </div>
        </figure>
      </div>
    )
  }
}