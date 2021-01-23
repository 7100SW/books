import React, {Component} from 'react';

export default class ShelfChangerComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value || 'none'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });

        this.props.onChange(e.target.value);
    }

    handleSubmit(e){
        alert('Selected: ' + this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="book-shelf-changer">
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </form>
        );
    }
}