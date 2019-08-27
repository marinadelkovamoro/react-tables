import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <label>
                        Math
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        History
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        Science
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        English
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                </label>
                <input type="submit" value="Add Student" />
            </form>
        );
    }
}

export default (NameForm);
