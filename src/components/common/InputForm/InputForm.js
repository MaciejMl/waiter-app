import styles from './InputForm.module.scss';
import Form from 'react-bootstrap/Form';

const InputForm = ({ fieldValue }) => {
  return (
    <>
      <Form.Label htmlFor='inputPassword5'></Form.Label>
      <Form.Control
        className={styles.root}
        type='text'
        id='value'
        aria-describedby='value field'
        value={fieldValue}
      />
    </>
  );
};

export default InputForm;
