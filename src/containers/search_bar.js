import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { movieSearchAction } from "../actions/action_movieSearch";

class Search extends Component {
	constructor(props){
		super(props)

		this.state = { term: '' }
	}
	onInputTypeChange(term){
		this.setState({term});
		this.props.movieSearchAction(term);
	}
	
	render() {
		return(	<div className="container-fluid text-center">
					<h6 className="text-center">List!!!</h6>
					<input 
						contentEditable={true}
						type="text" 
						value = {this.state.term}
						onChange = {event => this.onInputTypeChange(event.target.value)}
					/>
				</div>
		)	
	}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ movieSearchAction },dispatch);
};

export default connect(null, mapDispatchToProps)(Search);