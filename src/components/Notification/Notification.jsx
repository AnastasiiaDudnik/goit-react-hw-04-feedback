import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <p>{message}</p>;
};

Notification.PropType = {
  message: PropTypes.string.isRequired,
};
