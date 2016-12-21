import React from 'react';

export default class WelcomeCard extends React.Component{
    render(){
        return(
            <div className='welcomeCard'>
                <div className='homeSprite'></div>
                <span className='welcomeHeader'>
                    Welcome to Instagram!
                </span>
                <span className='welcomeSubHead'>
                    Follow accounts to see photos and videos in your feed.
                </span>
            </div>
        )
    }
}
