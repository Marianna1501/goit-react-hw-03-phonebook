import PropTypes from 'prop-types';
import Buttons from './Button.styled';

const Button = ({ onDelete }) => {
  return (
    <Buttons type="button" onClick={onDelete}>
      Delete
    </Buttons>
  );
};

Button.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default Button;
