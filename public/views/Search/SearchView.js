import React from 'react';
import Nav from './../Nav/Nav';
import PhotoGrid from './../Profile/Photogrid';
import axios from 'axios';

export default class SearchView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            users: [],
            loaded: false
        }
        document.title = '#' + this.props.params.searchTerm + ' • Instagram photos and videos';
    }
    componentDidMount() {
        axios.get('/api/search/' + this.props.params.searchTerm).then(res => {
            this.setState({
                loaded: true,
                posts: res.data.posts,
                users: res.data.users,
                usersHtml: res.data.users.map((user, i) => {
                    return (
                        <article key={i} className='searchProfile'>
                            <a href={`#/profile/${user.username}`}><img src={user.profilepic} className='searchProfileImg'/></a>
                            <a href={`#/profile/${user.username}`}>
                                <div className='searchProfileUsername'>{user.username}</div>
                            </a>
                            <div className='searchProfileFullName'>{user.fullname}</div>
                        </article>
                    )
                })
            });
        })
    }
    render() {
        return (
            <div className='searchView'>
                <Nav/>
                <div className='head'>
                    <div className='searchTerm'>
                        #{this.props.params.searchTerm}
                    </div>
                    {this.state.loaded
                        ? <div className='postCount'>
                                <span className='bold'>{this.state.posts.length + ' '}</span>
                                {this.state.posts.length === 1
                                    ? 'post '
                                    : 'posts '}
                                <span className='bold '>{' ' + this.state.users.length + ' '}</span>
                                {this.state.users.length === 1
                                    ? 'user '
                                    : 'users '}
                            </div>
                        : null}
                </div>
                <div className='profileView'>
                    {this.state.posts.length
                        ? <PhotoGrid posts={this.state.posts}/>
                        : null}
                    {this.state.users.length
                        ? <section className='searchProfileContainer'>
                                <span className='topPosts'>
                                    users
                                </span>
                                {this.state.usersHtml}
                            </section>
                        : null}
                </div>
            </div>
        )
    }
}
