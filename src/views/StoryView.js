import React from 'react';
import { connect } from 'react-redux';

import Story from '../Components/Story';

import { getStories } from "../actions";

class StoryView extends React.Component {
    render() {
        //Find the story at this address
        //1. Callign up the redux state
        //2. From the array of stories, find() the story which has the ID that matches the URL address. 
        const story = this.props.stories.find(
            story => `${story.id}` === this.props.match.params.id
        );
            console.log(story)
    return (
        <div>
            <Story story={story}/>
        </div>
    );
    }
};

function mapStateToProps(state) {
    return {
        stories: state.stories,
        isFetching: state.fetchingStories
    };
}

export default connect(mapStateToProps, { getStories })(StoryView);