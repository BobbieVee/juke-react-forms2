import React from 'react';
import Songs from './songs';

class Playlist extends React.Component{
	constructor(props){
		super(props);
		state: {value: 0 }
	}

	componentWillMount(){
		this.props.selectPlaylist(this.props.routeParams.playlistId)
	}

	componentWillReceiveProps(nextProps){
		const nextId = nextProps.routeParams.playlistId;
		const thisId = this.props.routeParams.playlistId;
		const selectPlaylist = this.props.selectPlaylist;
		if (nextId !== thisId) selectPlaylist(nextId);
	}

	handleChange(e){
		this.setState({value: e.target.value});
	}

	addSong(event){
	console.log('value = ', event)
		// this.props.addSongToPlaylist(event.target.value);
	}

	render(){
		const playlist = this.props.selectedPlaylist;
		console.log('props = ', this.props)

		return(
			<div>
			<div>
			  <h3>{ playlist.name }</h3>
			  <Songs songs={playlist.songs} currentSong={this.props.currentSong}/> {/** Hooray for reusability! */}
			  { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
			  <hr />
			</div>
			<div className="well">
			    <form onSubmit={this.addSong} className="form-horizontal" noValidate name="songSelect">
			      <fieldset>
			        <legend>Add to Playlist</legend>
			        <div className="form-group">
			          <label htmlFor="song" className="col-xs-2 control-label">Song</label>
			          <div className="col-xs-10">
			            <select className="form-control"  onChange={this.handleChange}>
			            {
			            	this.props.songs.map((song)=>{
			            		return(
			            			<option key={song.id} value={song.id}>{song.name}</option>
		            			)
			            	})
			            }
			            </select>
			          </div>
			        </div>
			        <div className="form-group">
			          <div className="col-xs-10 col-xs-offset-2">
			            <button type="submit" className="btn btn-success">Add Song</button>
			          </div>
			        </div>
			      </fieldset>
			    </form>
			  </div>
			  </div>






		)
	}}

export default Playlist;
