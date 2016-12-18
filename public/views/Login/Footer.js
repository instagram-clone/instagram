import React from 'react';

export default class Footer extends React.Component{
	render(){
		return(
			<footer>
				<ul>
					<a href='#'><li>About us</li></a>
					<a href='#'><li>Support</li></a>
					<a href='#'><li>Blog</li></a>
					<a href='#'><li>Press</li></a>
					<a href='#'><li>API</li></a>
					<a href='#'><li>Jobs</li></a>
					<a href='#'><li>Privacy</li></a>
					<a href='#'><li>terms</li></a>
					<a href='#'><li>directory</li></a>
					<a href='#'><li>Language</li></a>
					<div className='copyright'>
						© 2016 INSTAGRAM
					</div>
				</ul>
			</footer>
		)
	}
}
