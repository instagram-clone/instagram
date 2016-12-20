import React from 'react';
import {Link} from 'react-router';

export default class PhotoHeader extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='photoHeader'>
                <div className='leftSide'>
                    <Link to={`profile/${this.props.username}`}><img src={this.props.profilepic} /></Link>
                    <div className='nameContainer'>
                        <Link className='profileLink' to={`profile/${this.props.username}`}>{this.props.username}</Link>
                        <Link className='locationLink' to={`search/${this.props.location}`}>{this.props.location}</Link>
                    </div>
                </div>
                <span className='timestamp'>{this.props.timestamp}</span>
            </div>
        )
    }
}
