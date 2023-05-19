import { useReducer } from "react";
import Section from "./feedback/section";
import FeedbackOptions from "./feedback/feedbackoptions";
import Statistics from "./feedback/statistics";
import css from "./feedback/feedback.module.css";
import reducer from "reducer/reducer";

export const App = () => {

  const [vote, setVote] = useReducer(reducer, { good: 0, neutral: 0, bad: 0 })

  const handleVote = (name) => { setVote({ type: `${name}`, payload: 1 }) }

  const countTotalFeedback = () => (vote.good + vote.neutral + vote.bad)
  const countPositiveFeedbackPercentage = () => (Math.round(((vote.good / countTotalFeedback()) * 100)))

  return (
    <div className={css.INeedAWrapperNow}>
      <Section title="Please leave feedback">
        {<div className={css.feedbackOptions}>
          {Object.keys(vote).map((el) => < FeedbackOptions options={el} key={el} handleVote={handleVote} />)}
        </div>}
      </Section >
      <Section title="Statistics">
        <Statistics vote={vote} countTotalFeedback={countTotalFeedback} countPositiveFeedbackPercentage={countPositiveFeedbackPercentage} />
      </Section >
    </div>
  )

};
