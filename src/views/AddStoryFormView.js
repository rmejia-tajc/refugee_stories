import React from 'react';
import { connect } from 'react-redux';

import { addStory } from '../actions';

import AddStoryForm from '../Components/AddStoryForm';

function AddStoryFormView(props) {
  return <AddStoryForm {...props} />;
}

export default connect(null, { addStory })(AddStoryFormView);