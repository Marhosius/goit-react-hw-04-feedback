import Notification from "./notification";
import css from "./feedback.module.css";
import PropTypes from "prop-types";


export const Statistics = ({ vote, countTotalFeedback, countPositiveFeedbackPercentage }) => {

    if (!countTotalFeedback()) {
        return (<Notification message="There is no feedback"></Notification>)
    } else {
        return (<div className={css.feedbackStatistic}>
            <p className={css.statisticInfo}>Good: {vote.good}</p>
            <p className={css.statisticInfo}>Neutral: {vote.neutral}</p>
            <p className={css.statisticInfo}>Bad: {vote.bad}</p>
            <p className={css.statisticInfo}>Total:{countTotalFeedback()}</p>
            <p className={css.statisticInfo}>Positive feedback: {countPositiveFeedbackPercentage()}%</p>
        </div >)
    }

}

Statistics.propTypes = {
    countTotalFeedback: PropTypes.func.isRequired,
    countPositiveFeedbackPercentage: PropTypes.func.isRequired,
    vote: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }).isRequired,
};

export default Statistics