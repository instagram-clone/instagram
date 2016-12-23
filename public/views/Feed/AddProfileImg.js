import React from 'react';
import {Link} from 'react-router';

export default class AddProfileImg extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hidden : false,
            hide: {
                display: 'none'
            }
        }
    }
    closePrompt(){
        this.setState({
            hidden:true
        });
    }
    render(){
        return(
            <section style={this.state.hidden ? this.state.hide : {}} className='addProfileImg'>
                <button onClick={this.closePrompt.bind(this)} className={`closeLink`}></button>
                <div className='addArea'>
                    <Link to='editProfile'><div className='addSprite'></div></Link>
                    <Link to='editProfile'><div className='addText'>Add a profile photo</div></Link>
                </div>
            </section>
        )
    }
}
