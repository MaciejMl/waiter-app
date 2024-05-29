import styles from './SelectForm.module.scss';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

const SelectForm = ({ value, handleChange }) => {
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    handleChange(inputValue);
  };

  const statusOptions = ['Free', 'Busy', 'Reserved', 'Cleaning'];

  return (
    <>
      <Form.Select
        className={styles.select}
        aria-label='status select'
        defaultValue={value}
        onChange={handleInputChange}
      >
        {statusOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Form.Select>
    </>
  );
};

SelectForm.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SelectForm;
