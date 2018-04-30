import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {
	renderList(result){
		return(
			<div className="fluid"  key={result.id}>
				<div className="table-responsive">
					<table className="table table-bordered">
					    <tbody>
					      <tr>
					        <td className="col-xs-2">{result.id}</td>
					        <td className="col-xs-2">{result.name}</td>
					        <td className="col-xs-3">{result.full_name}</td>
					        <td className="col-xs-1">{result.stargazers_count}</td>
					        <td className="col-xs-2">{result.created_at}</td>
					        
					      </tr>
					    </tbody>
					 </table>
				 </div>
			</div>
		)
	}

	render() {
	if(this.props.movies){
		return(	
			<div className="row">
				<div className="fluid">
				<div className="table-responsive">
					<table className="table table-bordered">
					    <thead>
					      <tr>
					        <th className="col-xs-2">ID</th>
					        <th className="col-xs-2">Repo Title</th>
					        <th className="col-xs-3">Owner</th>
					        <th className="col-xs-1">Stars</th>
					        <th className="col-xs-2">Created at</th>
					      </tr>
					    </thead>
					 </table>
				 </div>
				 </div>
				{ this.props.movies.items.map((this.renderList))}
			</div>
			);	
	}
	else{
		return <div>Type user name to get list</div>;
	}

	}
}

function mapStateToProps({ movies }) {
	return { movies }
}


export default connect(mapStateToProps)(MovieList);