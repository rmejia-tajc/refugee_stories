import React from "react";
import { connect } from "react-redux";

import Stories from "../Components/Stories";

import { getStories } from "../actions";

class StoriesView extends React.Component {

    componentDidMount() {
        this.props.getStories();
    }

    render() {
        if (this.props.isFetching) {
            return <h3 className="adminText">Loading Stories...</h3>;
        }
        return (
            <div>
                <Stories 
                    stories={this.props.stories}
                    history={this.props.history} 
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        stories: state.stories,
        isFetching: state.fetchingStories
    };
}

export default connect(mapStateToProps, { getStories })(StoriesView);