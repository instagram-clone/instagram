import React from 'react';
import CommentDisplay from './../Feed/FeedPhoto/CommentDisplay';
import CommentBar from './../Feed/FeedPhoto/CommentBar';

export default class ExpandedPhotoView extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log('expand handle', this.props)
    var bgImg = {
      backgroundImage: 'url(' + this.props.photourl +')',
      backgroundPosition: 'center'
    }
    return(
      <div className="expanded-view">
        <span onClick={() => {this.props.close()}}>x</span>
        <div className="expanded-bg"></div>
        <div id="expanded-content">
        <figure className={this.props.filter}>
          <img src={this.props.photourl} />
          <CommentDisplay />
          <CommentBar />
        </figure>
        </div>
      </div>
    )
  }
}