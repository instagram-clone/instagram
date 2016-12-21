import React from 'react';

export default class FilterPreview extends React.Component {
    render() {
        return (
            <div className='filterPreview'>
                <span className='filterName'>{this.props.filter}</span>
                <figure onClick={() => this.props.setFilter(this.props.filter)} className={this.props.filter}>
                    <img src={this.props.url}/>
                </figure>
            </div>
        )
    }
}
