import { useReducer } from "react";
import Section from "./feedback/section";
import FeedbackOptions from "./feedback/feedbackoptions";
import Statistics from "./feedback/statistics";
import css from "./feedback/feedback.module.css"

const reducer = (state, action) => {
  if (action.type === 'good') return state.good + action.payload
  if (action.type === 'neutral') return state.good + action.payload
  if (action.type === 'bad') return state.good + action.payload
}

export const App = () => {

  const [vote, setVote] = useReducer(reducer, { good: 0, neutral: 0, bad: 0 })

  const handleVote = (name) => setVote({ type: name, payload: 1 })

  const countTotalFeedback = () => (vote.good + vote.neutral + vote.bad)
  const countPositiveFeedbackPercentage = () => (Math.round(((vote.good / countTotalFeedback()) * 100)))

  return (
    <div className={css.INeedAWrapperNow}>
      <Section title="Please leave feedback">
        {<div className={css.feedbackOptions}>
          <FeedbackOptions options="good" handleVote={handleVote} />
          <FeedbackOptions options="neutral" handleVote={handleVote} />
          <FeedbackOptions options="bad" handleVote={handleVote} />
        </div>}
      </Section >
      <Section title="Statistics">
        <Statistics state={vote} countTotalFeedback={countTotalFeedback} countPositiveFeedbackPercentage={countPositiveFeedbackPercentage} />
      </Section >
    </div>
  )

};
