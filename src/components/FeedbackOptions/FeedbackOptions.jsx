import PropTypes from 'prop-types';
import { ButtonList, Button } from './FeedbackOptions.styled';

const options = ['good', 'neutral', 'bad'];

export const FeedbackOptions = ({ handleFeedbackIncrement }) => {
  return (
    <ButtonList>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          name={option}
          onClick={() => {
            handleFeedbackIncrement(option);
          }}
        >
          {option}
        </Button>
      ))}
    </ButtonList>
  );
};

FeedbackOptions.PropType = {
  handleFeedbackIncrement: PropTypes.func.isRequired,
};
