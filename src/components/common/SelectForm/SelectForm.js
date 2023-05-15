import styles from './SelectForm.module.scss';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import PropTypes from 'prop-types';

const SelectForm = ({ defaultValue, handleChange }) => {
  const [value, setValue] = useState(defaultValue);

  const handleInputChange = (e) => {
    setValue(e.target.value);
    handleChange(e.target.value);
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
  defaultValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SelectForm;
