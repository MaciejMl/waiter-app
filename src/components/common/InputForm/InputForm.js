import styles from './InputForm.module.scss';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const InputForm = ({ fieldValue, handleChange, placeholder, className }) => {
  const [value, setValue] = useState(fieldValue);

  const handleInputChange = (e) => {
    setValue(e.target.value);
    handleChange(e.target.value);
  };

  return (
    <>
      <Form.Label htmlFor='inputValues'></Form.Label>
      <Form.Control
        className={clsx(styles.root, className)}
        type='text'
        id='value'
        aria-describedby='value field'
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
      />
    </>
  );
};

InputForm.propTypes = {
  fieldValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

InputForm.defaultProps = {
  fieldValue: '',
};

export default InputForm;
