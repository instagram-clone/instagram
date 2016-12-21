import React from 'react';
import FilterPreview from './FilterPreview';

export default class FilterContainer extends React.Component{
    render(){
        return(
            <div className='filterContainer'>
                <FilterPreview setFilter={this.props.setFilter} filter='normal' url={this.props.url} />
				<FilterPreview setFilter={this.props.setFilter} filter='aden' url={this.props.url} />
                <FilterPreview setFilter={this.props.setFilter} filter='reyes' url={this.props.url} />
                <FilterPreview setFilter={this.props.setFilter} filter='perpetua' url={this.props.url} />
                <FilterPreview setFilter={this.props.setFilter} filter='inkwell' url={this.props.url} />
                <FilterPreview setFilter={this.props.setFilter} filter='toaster' url={this.props.url} />
                <FilterPreview setFilter={this.props.setFilter} filter='walden' url={this.props.url} />
                <FilterPreview setFilter={this.props.setFilter} filter='hudson' url={this.props.url} />
                <FilterPreview setFilter={this.props.setFilter} filter='gingham' url={this.props.url} />
                <FilterPreview setFilter={this.props.setFilter} filter='mayfair' url={this.props.url} />
                <FilterPreview setFilter={this.props.setFilter} filter='lofi' url={this.props.url} />
                <FilterPreview setFilter={this.props.setFilter} filter='xpro2' url={this.props.url} />
                <FilterPreview setFilter={this.props.setFilter} filter='_1977' url={this.props.url} />
                <FilterPreview setFilter={this.props.setFilter} filter='brooklyn' url={this.props.url} />
                <FilterPreview setFilter={this.props.setFilter} filter='nashville' url={this.props.url} />
            </div>
        )
    }
}
