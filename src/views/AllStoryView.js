import React from 'react';
import { connect } from 'react-redux';

import AllStory from '../Components/AllStory';

import { getAllStories, updateStory } from "../actions";

class AllStoryView extends React.Component {
    render() {
        const allStory = this.props.allStories.find(
            allStory => `${allStory.id}` === this.props.match.params.id
        );
            console.log("log form AllStoryView",allStory)
    return (
        <div>
            <AllStory allStory={allStory} updateStory={this.props.updateStory} {...this.props}/>
        </div>
    );
    }
};

function mapStateToProps(state) {
    return {
        allStories: state.allStories,
        isFetchingAll: state.gettingAllStories
    };
}

export default connect(mapStateToProps, { getAllStories, updateStory })(AllStoryView);