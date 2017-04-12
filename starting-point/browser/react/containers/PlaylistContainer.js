import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

export default class PlaylistContainer extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			value: '',
			disableButton: true,
			shortWarning: false,
			longWarning: false 
		};
		this.updatePlaylistName = this.updatePlaylistName.bind(this);
		this.createNewPlaylist = this.createNewPlaylist.bind(this);
	}

	updatePlaylistName(ev){
		const value = ev.target.value;
		this.setState({value: value});
		this.setState({disableButton: value.length > 0 && value.length < 17?false: true});
		this.setState({shortWarning: value.length > 0 ?false: true});
		this.setState({longWarning: value.length < 17 ?false: true});


	}

	createNewPlaylist(e){
		e.preventDefault();
		const playlist = this.state.value;
		this.setState({value: '', disableButton: true});
		this.props.createNewPlaylistDB(playlist);		
	}

	render(){
		return(
			<div>
				<NewPlaylist 
					value={this.state.value} 
					disableButton={this.state.disableButton} 
					updatePlaylistName={this.updatePlaylistName} 
					createNewPlaylist={this.createNewPlaylist}
					shortWarning={this.state.shortWarning}
					longWarning={this.state.longWarning}	
				/>
			</div>

		)

	}
}