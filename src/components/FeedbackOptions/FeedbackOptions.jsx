import PropTypes from 'prop-types';
import { ButtonList, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, handleFeedbackIncrement }) => {
  return (
    <ButtonList>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          name={option}
          onClick={handleFeedbackIncrement}
        >
          {option}
        </Button>
      ))}
    </ButtonList>
  );
};

FeedbackOptions.PropType = {
  options: PropTypes.oneOf(['good', 'neutral', 'bad']).isRequired,
  handleFeedbackIncrement: PropTypes.func.isRequired,
};
