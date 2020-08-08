import React, { Component } from "react";

import "./AddPerson.css";

class AddPerson extends Component {
	state = {
		name: "",
		age: "",
	};
	nameChangeHandler = (event) => {
		this.setState({ name: event.target.value });
	};
	ageChangeHandler = (event) => {
		this.setState({ age: event.target.value });
	};
	render() {
		return (
			<div className="AddPerson">
				<input
					placeholder="Name"
					type="text"
					onChange={this.nameChangeHandler}
					value={this.state.name}
				/>
				<input
					placeholder="Age"
					type="number"
					onChange={this.ageChangeHandler}
					value={this.state.age}
				/>
				<button
					onClick={() =>
						this.props.personAdded(this.state.name, this.state.age)
					}
				>
					Add Person
				</button>
			</div>
		);
	}
}

export default AddPerson;
