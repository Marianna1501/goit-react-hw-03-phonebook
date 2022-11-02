import PropTypes from 'prop-types';
import Li from './ContactList.styled';
import Button from 'components/Button/Button';

const ContactList = ({ visible, onDelete }) => {
  return (
    <div>
      <ul>
        {visible.map(({ id, name, number }) => (
          <Li key={id}>
            {name}: {number}
            <Button onDelete={() => onDelete(id)} />
          </Li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  visible: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ContactList;
