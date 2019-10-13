import axios from 'axios';

export const ADD_STORY_START = 'ADD_STORY_START';
export const ADD_STORY_SUCCESS = 'ADD_STORY_SUCCESS';
export const ADD_STORY_FAILURE = 'ADD_STORY_FAILURE';

export const addStory = story => dispatch => {
    dispatch({ type: ADD_STORY_START });
    axios
        .post('https://refugeestories.herokuapp.com/api/submit', story)
        .then(res => {
            dispatch({ type: ADD_STORY_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch({ type: ADD_STORY_FAILURE, payload: err }));
};