import React, { Component } from 'react'

class AdvForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            comment: '',
            language: 'angular'
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { user, comment, language } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="user">Username </label>
                    <input type="text" id="user" name="user" value={user} onChange={this.handleChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comments </label>
                    <textarea id="comment" name="comment" value={comment} onChange={this.handleChange}></textarea>
                </div>
                <br />
                <div>
                    <label htmlFor="language">Language </label>
                    <select id="language" name="language" value={language} onChange={this.handleChange}>
                        <option value="react">React</option>
                        <option value="reactnative">React Native</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default AdvForm