import axios from 'axios';

export const FETCH_STORY_START = 'FETCH_STORY_START';
export const FETCH_STORY_SUCCESS = 'FETCH_STORY_SUCCESS';
export const FETCH_STORY_FAILURE = 'FETCH_STORY_FAILURE';

export const getStory = () => dispatch => {
    dispatch({ type: FETCH_STORY_START });
    axios
        .get(`https://refugeestories.herokuapp.com/api/stories/${story.id}`)
        .then(res => {
            dispatch({ type: FETCH_STORY_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch({ type: FETCH_STORY_FAILURE, payload: err }));
};