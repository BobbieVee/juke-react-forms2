import React from 'react';

const NewPlaylist = (props) => {
	return(
		<div>
		<div className="well">
		  <form onSubmit={props.createNewPlaylist} className="form-horizontal">
		    <fieldset>
		      <legend>New Playlist</legend>
		      <div className="form-group">
		        <label className="col-xs-2 control-label">Name</label>
		        <div className="col-xs-10">
		          <input className="form-control" onChange={props.updatePlaylistName} value={props.value} type="text"/>
		        </div>
		      </div>
		      <div className="form-group">
		        <div className="col-xs-10 col-xs-offset-2">
		        {props.shortWarning?<div className="alert alert-warning">Please enter a name</div>:''}
		        {props.longWarning?<div className="alert alert-warning">Playlist can have no more than 16 characters</div>:''}
		        		
		          <button disabled={props.disableButton} type="submit" className="btn btn-success">Create Playlist</button>
		        </div>
		      </div>
		    </fieldset>
		  </form>
		</div>

		</div>
	)
}

export default NewPlaylist;