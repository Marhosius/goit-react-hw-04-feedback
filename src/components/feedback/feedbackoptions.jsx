
import css from "./feedback.module.css";
import PropTypes from "prop-types";

export const FeedbackOptions = ({ handleVote, options }) => {
    const handleVoteOnClick = (ev) => {
        handleVote(ev.target.name)
    }

    return (
        <button onClick={handleVoteOnClick} name={options} className={css.feedbackButton}>{options}</button>
    )
}

FeedbackOptions.propTypes = {
    handleVote: PropTypes.func.isRequired,
    options: PropTypes.string.isRequired
}

export default FeedbackOptions