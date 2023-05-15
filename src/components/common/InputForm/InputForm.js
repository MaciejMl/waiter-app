import styles from './InputForm.module.scss';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import PropTypes from 'prop-types';

const InputForm = ({ fieldValue, handleChange }) => {
  const [value, setValue] = useState(fieldValue);

  const handleInputChange = (e) => {
    setValue(e.target.value);
    handleChange(e.target.value);
  };

  return (
    <>
      <Form.Label htmlFor='inputPassword5'></Form.Label>
      <Form.Control
        className={styles.root}
        type='text'
        id='value'
        aria-describedby='value field'
        value={value}
        onChange={handleInputChange}
      />
    </>
  );
};

InputForm.protoTypes = {
  fieldValue: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default InputForm;
