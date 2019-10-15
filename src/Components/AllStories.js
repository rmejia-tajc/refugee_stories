import React from 'react';
import {getAllStories} from '../actions';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';

class AllStories extends React.Component {
	state = {
		OKToRender: false
	};

	//Fetch the State from server
	componentDidMount() {
		this.props.getAllStories();
	}

	//Only allow content to render once stories is fully fetched
	componentDidUpdate(prevProps) {
		if (this.props.gettingAllStories !== prevProps.gettingAllStories) {
			if (!this.props.gettingAllStories) {
				this.setState({
					OKToRender: true
				});
			}
		}
	}

	render() {
		if (this.props.self.length === 0) {
			return <div className="adminText">You must log in to view all the stories</div>;
		}
		// Check to make sure all state is initiallized
		else if (!this.state.OKToRender) return <div className="adminText"> Loading...</div>;
console.log("test from AllStories.js", this.props.allStories)
		return (
			<>
				<h2 className="adminText">List of All Stories</h2>
					<ul className="adminStoriesListUl">
						{this.props.allStories.map(allStory => {

							return (

								<Link className="adminStoriesListLink"to={`/admin/all-stories/${allStory.id}`} key={allStory.id}>
								<li className="adminStoriesList">{allStory.title}</li>
								</Link>

							)
						})}
					</ul>
			</>
		);
	}
}

export default withRouter(
	connect(
		({gettingAllStories, allStories, self}) => ({gettingAllStories, allStories, self}),
		{getAllStories}
	)(AllStories)
);
