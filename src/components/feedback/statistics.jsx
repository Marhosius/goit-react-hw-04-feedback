import { Component } from "react";
import Notification from "./notification";
import css from "./feedback.module.css";
import PropTypes from "prop-types";


export class Statistics extends Component {
    render() {
        if (!this.props.countTotalFeedback()) {
            return (<Notification message="There is no feedback"></Notification>)
        } else {
            return (<div className={css.feedbackStatistic}>
                <p className={css.statisticInfo}>Good: {this.props.state.good}</p>
                <p className={css.statisticInfo}>Neutral: {this.props.state.neutral}</p>
                <p className={css.statisticInfo}>Bad: {this.props.state.bad}</p>
                <p className={css.statisticInfo}>Total:{this.props.countTotalFeedback()}</p>
                <p className={css.statisticInfo}>Positive feedback: {this.props.countPositiveFeedbackPercentage()}%</p>
            </div >)
        }

    }
}

Statistics.propTypes = {
    countTotalFeedback: PropTypes.func.isRequired,
    countPositiveFeedbackPercentage: PropTypes.func.isRequired,
    state: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }),
};

export default Statistics