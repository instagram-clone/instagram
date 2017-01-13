import React from 'react';
import PhotoGridItem from './PhotoGridItem';
import ExpandedPhotoView from './ExpandedPhotoView';

export default class PhotoGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            picInfo: nextProps.posts.reverse()
        });
    }
    componentWillMount(){
        this.setState({
            picInfo: this.props.posts.reverse()
        });
    }
    expandHandle(picInfo) {
        this.setState({expandImg: picInfo})
    }
    close() {
        this.setState({expandImg: 0})
    }
    render() {
        let posts = [];
        if (this.state.picInfo) {
            posts = this.state.picInfo
        }
        let imgList = [];
        imgList = posts.map(post => {
          return <PhotoGridItem
                    author={post.author}
                    comments={post.comments}
                    likes={post.likes}
                    id={post._id}
                    key={post._id}
                    description={post.description}
                    filter={post.filter}
                    photourl={post.photourl}
                    timestamp={post.timestamp}
                    location={post.location}
                    testFunc={this.expandHandle.bind(this)}
                />
        }).sort((a, b) => {
            a = new Date(a.props.timestamp)
            b = new Date(b.props.timestamp);
            return a > b ? -1 : a < b ? 1 : 0;
        })
        return(
          <div>
            <div className="photoGrid">
                <span className='topPosts'>
                  top posts
               </span>
              {imgList}
            </div>
            <div>
            {
              this.state.expandImg
              ? <ExpandedPhotoView
                  photo={this.state.expandImg}
                  user={this.state.picInfo}
                  info={this.state.expandImg}
                  photourl={this.state.expandImg.photourl}
                  filter={this.state.expandImg.filter}
                  close={this.close.bind(this)}
                />
              : null
            }
            </div>
          </div>
        )
  }
}
