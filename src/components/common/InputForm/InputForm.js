import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './InputForm.module.scss';

const InputForm = ({
  fieldValue,
  handleChange,
  placeholder,
  className,
  min,
  max,
  type,
}) => {
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    handleChange(inputValue);
  };

  return (
    <>
      <label htmlFor='inputValues'></label>
      <input
        className={clsx(styles.root, className)}
        type={type}
        inputMode={type === 'text' ? 'text' : 'numeric'}
        min={min}
        max={max}
        id='value'
        aria-describedby='value field'
        placeholder={placeholder}
        value={fieldValue}
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
  min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.string,
};

InputForm.defaultProps = {
  fieldValue: '',
  min: '',
  max: '',
  type: 'text',
};

export default InputForm;
