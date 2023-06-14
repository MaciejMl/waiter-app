import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import styles from './TableAdd.module.scss';
import clsx from 'clsx';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import InputForm from '../../common/InputForm/InputForm';
import { useState } from 'react';
import { addTableRequest } from '../../../redux/tablesRedux';
import SelectForm from '../../common/SelectForm/SelectForm';
import shortid from 'shortid';

const TableAdd = () => {
  const [status, setStatus] = useState('Free');
  const [people, setPeople] = useState(parseInt(0));
  const [maxPeople, setMaxPeople] = useState(parseInt(4));
  const [price, setPrice] = useState(parseInt(0));
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNameChange = (name) => {
    setName(name);
  };

  const handleStatusChange = (value) => {
    setStatus(value);
    if (value === 'Busy') {
      setPrice(0);
    }
    if (value === 'Cleaning' || value === 'Free') {
      setPeople(0);
    }
  };

  const handlePeopleChange = (value) => {
    const newPeople = parseInt(value);
    if (newPeople <= parseInt(maxPeople) && newPeople >= 0) {
      setPeople(value);
    } else {
      setPeople(maxPeople);
    }
  };

  const handleMaxPeopleChange = (value) => {
    const newMaxPeople = parseInt(value);
    if (newMaxPeople >= 0 && newMaxPeople <= 10) {
      setMaxPeople(value);
    }
    if (newMaxPeople < parseInt(people)) {
      setPeople(newMaxPeople);
    }
  };

  const handlePriceChange = (value) => {
    setPrice(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTableRequest({ name, status, people, maxPeople, price, id: shortid() })
    );
    navigate('/');
  };

  return (
    <Container className={clsx('my-4', styles.root)}>
      <Form onSubmit={handleSubmit} className={styles.form}>
        <h1>
          <span className={styles.status}>Name: </span>
          <InputForm
            className={styles.nameInput}
            fieldValue={name}
            handleChange={handleNameChange}
            placeholder={'Table name here'}
            type={'text'}
          />
        </h1>
        <p>
          <span className={styles.status}>Status: </span>
          <SelectForm defaultValue={status} handleChange={handleStatusChange} />
        </p>
        <p>
          <span className={styles.people}>People: </span>
          <InputForm
            fieldValue={people}
            min={'0'}
            max={maxPeople}
            handleChange={handlePeopleChange}
            type='number'
          />
          /
          <InputForm
            fieldValue={maxPeople}
            min={'0'}
            max={'10'}
            handleChange={handleMaxPeopleChange}
            type='number'
          />
        </p>
        {status === 'Busy' && (
          <p>
            <span className={styles.bill}>Bill: </span>$
            <InputForm
              fieldValue={price.toString()}
              type='text'
              handleChange={handlePriceChange}
            />
          </p>
        )}

        <Button type='submit' variant='primary'>
          Add Table
        </Button>
      </Form>
    </Container>
  );
};

export default TableAdd;
