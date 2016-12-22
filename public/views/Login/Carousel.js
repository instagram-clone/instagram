import React from 'react';

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayImg: 0
        }
    }
    changePhotos() {
        var newDisplayImg;
        if(this.state.displayImg <= 3){
            newDisplayImg = this.state.displayImg + 1;
        }else{
            newDisplayImg = 0;
        }
        window.setTimeout(() => {
            this.setState({displayImg: newDisplayImg})
        }, 3200)
    }
    render() {
        this.changePhotos();
        return (
            <div className='carousel'>
                <img className={this.state.displayImg == 0 ? 'activeImg' : this.state.displayImg == 1 ? 'prevActiveImg' : '' } src='https://instagramstatic-a.akamaihd.net/h1/images/homepage/screenshot1-2x.jpg/2debbd5aaab8.jpg' />
                <img className={this.state.displayImg == 1 ? 'activeImg' : this.state.displayImg == 2 ? 'prevActiveImg' : '' } src='https://instagramstatic-a.akamaihd.net/h1/images/homepage/screenshot2-2x.jpg/783de51ff073.jpg' />
                <img className={this.state.displayImg == 2 ? 'activeImg' : this.state.displayImg == 3 ? 'prevActiveImg' : '' } src='https://instagramstatic-a.akamaihd.net/h1/images/homepage/screenshot3-2x.jpg/48fc753e7712.jpg' />
                <img className={this.state.displayImg == 3 ? 'activeImg' : this.state.displayImg == 4 ? 'prevActiveImg' : '' } src='https://instagramstatic-a.akamaihd.net/h1/images/homepage/screenshot4-2x.jpg/8e431a88ffdd.jpg' />
                <img className={this.state.displayImg == 4 ? 'activeImg' : this.state.displayImg == 0 ? 'prevActiveImg' : '' } src='https://instagramstatic-a.akamaihd.net/h1/images/homepage/screenshot5-2x.jpg/9cb9ba2dda6a.jpg' />
            </div>
        )
    }
}
