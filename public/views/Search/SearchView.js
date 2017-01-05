import React from 'react';
import Nav from './../Nav/Nav';
import PhotoGrid from './../Profile/Photogrid';
import axios from 'axios';

export default class SearchView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts : []
        }
    }
    componentDidMount(){
        axios.get('/api/search/' + this.props.params.searchTerm).then(res => {
            console.log(res.data);
            this.setState({
                posts: res.data
            });
        })
    }
    render() {
        console.log('render')
        return (
            <div>
                <Nav/>
                <h1>{this.props.params.searchTerm}</h1>
                <div className='profileView'>
                    <PhotoGrid posts={this.state.posts}/>
                </div>
            </div>
        )
    }
}
