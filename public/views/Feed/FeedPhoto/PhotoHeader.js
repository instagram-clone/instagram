import React from 'react';

export default class PhotoHeader extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='photoHeader'>
                <div className='leftSide'>
                    <img src={this.props.profilepic} />
                    <div className='nameContainer'>
                        <a className='profileLink' href={`/profile/${this.props.username}`}>{this.props.username}</a>
                        <a className='locationLink' href={`/search/${this.props.location}`}>{this.props.location}</a>
                    </div>
                </div>
                <span className='timestamp'>{this.props.timestamp}</span>
            </div>
        )
    }
}
