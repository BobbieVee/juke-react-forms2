import React from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

class FilterableArtistsContainer extends React.Component{
	constructor(props){
		super(props);
		this.state = {inputValue: ""};
		this.handleChange=this.handleChange.bind(this);
	}

	handleChange(event){
		this.setState({inputValue: event.target.value});
	}

	render(){
		const inputValue = this.state.inputValue;
		return(
			<div>
				<FilterInput handleChange={this.handleChange}/>
				<Artists artists={this.props.artists.filter((artist)=> artist.name.toLowerCase().match(this.state.inputValue.toLowerCase()))}/>
			</div>
		)	
	}
}

export default FilterableArtistsContainer;