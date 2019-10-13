import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../actions';

class Signin extends React.Component {
	state = {
		username: 'admin',
		password: 'password'
	};

	handleInputChange = event => {
		const {name, value} = event.target;
		this.setState({[name]: value});
	};

	handleSubmit = event => {
		event.preventDefault();
		this.props.login(this.state);
	};

	render() {
		if (this.props.self !== '')
			return <div className="adminText">Logged in as {this.props.self}</div>;
		return (
			<form className="signInForm" onSubmit={this.handleSubmit}>
				<h2 className="adminText">Sign In</h2>
				<div>
					<input className="formInput"
						name='username'
						value={this.state.username}
						onChange={this.handleInputChange}
						type='text'
						placeholder=" Username"
					/>
				</div>
				<div>
					<input className="formInput"
						name='password'
						value={this.state.password}
						onChange={this.handleInputChange}
						type='password'
						placeholder=" Password"
					/>
				</div>
				<div>
					<button className="signInBtn" type='submit'>Sign In</button>
				</div>
			</form>
		);
	}
}

export default withRouter(
	connect(
		({logingIn, self}) => ({logingIn, self}),
		{login}
	)(Signin)
);
