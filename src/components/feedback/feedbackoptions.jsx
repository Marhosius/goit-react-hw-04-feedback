import { Component } from "react";
import css from "./feedback.module.css";
import PropTypes from "prop-types";

export class FeedbackOptions extends Component {
    handleVote = (ev) => {
        this.props.handleVote(ev.target.name)
    }
    render() {
        return (
            <button onClick={this.handleVote} name={this.props.options} className={css.feedbackButton}>{this.props.options}</button>
        )
    }
}

FeedbackOptions.propTypes = {
    handleVote: PropTypes.func.isRequired,
    options: PropTypes.string.isRequired
}

export default FeedbackOptions