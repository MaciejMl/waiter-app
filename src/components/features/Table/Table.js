import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import styles from './Table.module.scss';
import clsx from 'clsx';
import Button from 'react-bootstrap/Button';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';
import InputForm from '../../common/InputForm/InputForm';
import { useState, useEffect } from 'react';
import { editTablesRequest } from '../../../redux/tablesRedux';
import SelectForm from '../../common/SelectForm/SelectForm';

const Table = () => {
  const { Id } = useParams();

  const allData = useSelector(getAllTables);
  const tableData = allData.find(
    (table) => table.id.toString() === Id.toString()
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [status, setStatus] = useState('');
  const [people, setPeople] = useState('');
  const [maxPeople, setMaxPeople] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (tableData) {
      setStatus(tableData?.status);
      setPeople(tableData?.people.toString());
      setMaxPeople(tableData?.maxPeople.toString());
      setPrice(tableData?.price.toString());
    }
  }, [tableData]);

  const handleStatusChange = (value, newValue) => {
    setStatus(value);
    if (value === 'Busy') {
      setPrice('0');
    }
    if (value === 'Cleaning' || value === 'Free') {
      setPeople('0');
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
    dispatch(editTablesRequest({ status, people, maxPeople, price }, Id));
    navigate('/');
  };

  if (!tableData) return <Navigate to='/' />;

  return (
    <Container className={clsx('my-4', styles.root)}>
      <Form onSubmit={handleSubmit} className={styles.form}>
        <h1>{tableData.name}</h1>
        <p>
          <span className={styles.status}>Status: </span>
          <SelectForm
            defaultValue={tableData?.status}
            handleChange={handleStatusChange}
          />
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
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default Table;
