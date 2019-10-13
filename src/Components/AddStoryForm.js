import React from 'react';

class AddStoryForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            author: '',
            title: '',
            body: '',
            country: ''
        };
    };

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    addNewStory = event => {
        event.preventDefault();
        this.props.addStory(this.state);
        this.props.history.push('/thank-you');
    };

    render() {
        return (

            <div className="addStoryFormWrapper">

                <h2 className="addStoryTitle">Share Your Story</h2>

                <form className="updateForm">

                    <input className="inputBox"
                        onChange={this.handleChanges}
                        type='text'
                        name='author'
                        value={this.state.author}
                        placeholder=' Your Name'
                    />

                    <input className="inputBox"
                        onChange={this.handleChanges}
                        type='text'
                        name='country'
                        value={this.state.country}
                        placeholder=' Your Country of Origin'
                    />

                    <input className="inputBox"
                        onChange={this.handleChanges}
                        type='text'
                        name='title'
                        value={this.state.title}
                        placeholder=' Your Story Title'
                    />

                    <input className="inputBox"
                        onChange={this.handleChanges}
                        type='text'
                        name='body'
                        value={this.state.body}
                        placeholder=' Your Story...'
                    />

                    <button className="submitBtn" onClick={this.addNewStory}>Share Story</button>

                </form>

            </div>
        );
    }
}

export default AddStoryForm;