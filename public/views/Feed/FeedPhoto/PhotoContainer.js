import React from 'react';

export default class PhotoContainer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='photoContainer'>
                <figure className={this.props.filter}>
                    <img src={this.props.photoUrl} />
                </figure>
            </div>
        )
    }
}
