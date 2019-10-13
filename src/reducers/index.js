import {
  FETCH_STORIES_START,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_FAILURE,
  ADD_STORY_START,
  ADD_STORY_SUCCESS,
  ADD_STORY_FAILURE,
  
	//Login
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,

	//Get all stories
  GET_ALL_STORIES_START,
  GET_ALL_STORIES_SUCCESS,
  GET_ALL_STORIES_FAILURE,

	//Logout
  LOGOUT,
  
  //Update story
  UPDATE_START,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,
} from '../actions';

const initialState = {
  stories: [],
  fetchingStories: false,
  addingStory: false,
  error: null,  
	logingIn: false,
	gettingAllStories: false,
	allStories: [],
  self: '',
  updatingStory: false
};

const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STORIES_START:
      return {
        ...state,
        fetchingStories: true,
        error: null
      };
    case FETCH_STORIES_SUCCESS:
      return {
        ...state,
        fetchingStories: false,
        error: null,
        stories: action.payload
      };
    case FETCH_STORIES_FAILURE:
      return {
        ...state,
        fetchingStories: false,
        error: action.payload
      };
    case ADD_STORY_START:
      return {
        ...state,
        addingStory: true,
        error: null
      };
    case ADD_STORY_SUCCESS:
      return {
        ...state,
        addingStory: false,
        error: null,
        stories: action.payload
      };
    case ADD_STORY_FAILURE:
      return {
        ...state,
        addingStory: false,
        error: action.payload
      };

    //Login
    case LOGIN_START:
      return {...state, logingIn: true};
    case LOGIN_SUCCESS:
      localStorage.setItem('jwt', action.payload.data.token);
      return {
        ...state,
        self: action.payload.data.loggedInAs,
        logingIn: false
      };
    case LOGIN_FAILURE:
      return {...state, error: action.payload, logingIn: false};

    //Get all stories
    case GET_ALL_STORIES_START:
      return {...state, gettingAllStories: true};
    case GET_ALL_STORIES_SUCCESS:
      console.log(action.payload, 'from reducers');
      return {...state, allStories: action.payload, gettingAllStories: false};
    case GET_ALL_STORIES_FAILURE:
      return {...state, error: action.payload, gettingAllStories: false};

    //Logout
    case LOGOUT:
      return {...state, allStories: [], self: ''};
    
    //Update story
    case UPDATE_START:
      return {
        ...state,
        updatingStory: true
      };

    case UPDATE_SUCCESS:
      return {
        ...state,
        error: null,
        updatingStory: false,
      };

    case UPDATE_FAILURE:
      return {
        ...state,
        updatingStory: false,
        error: action.payload
      };

    default:
      return state;    
  }
};

export default storiesReducer;