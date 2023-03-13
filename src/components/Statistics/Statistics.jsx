import { Notification } from 'components/Notification/Notification';
import PropTypes from 'prop-types';
import { FeedbackList } from './Statistics.styled';

export const Statistics = ({
  state: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) => {
  if (totalFeedback) {
    return (
      <FeedbackList>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive feedback: {positiveFeedback}%</li>
      </FeedbackList>
    );
  } else {
    return <Notification message="No feedback given" />;
  }
};

Statistics.PropType = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    totalFeedback: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
  }).isRequired,
};
