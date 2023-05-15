import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import styles from './Table.module.scss';
import clsx from 'clsx';
import Button from 'react-bootstrap/Button';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';
import InputForm from '../../common/InputForm/InputForm';
import { useState } from 'react';
import { editTablesRequest } from '../../../redux/tablesRedux';
import SelectForm from '../../common/SelectForm/SelectForm';

const Table = () => {
  const { Id } = useParams();

  const allData = useSelector(getAllTables);
  const tableData = allData.find((table) => table.id === parseInt(Id));
  const [status, setStatus] = useState(tableData?.status);
  const [people, setPeople] = useState(parseInt(tableData?.people));
  const [maxPeople, setMaxPeople] = useState(parseInt(tableData?.maxPeople));
  const [price, setPrice] = useState(parseInt(tableData?.price));

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    if (newPeople >= 0 && newPeople <= 10 && newPeople <= maxPeople) {
      setPeople(newPeople);
      if (newPeople > maxPeople) {
        setMaxPeople(newPeople);
      }
    } else if (newPeople > 10) {
      setPeople(10);
    } else if (newPeople < 0) {
      setPeople(0);
    }
  };

  const handleMaxPeopleChange = (value) => {
    const newMaxPeople = parseInt(value);
    if (newMaxPeople >= 0 && newMaxPeople <= 10 && newMaxPeople >= people) {
      setMaxPeople(newMaxPeople);
    } else if (newMaxPeople > 10) {
      setMaxPeople(10);
    } else if (newMaxPeople < 0) {
      setMaxPeople(0);
    }
    if (people > newMaxPeople) {
      setPeople(newMaxPeople);
      setMaxPeople(newMaxPeople);
    }
  };

  const handlePriceChange = (value) => {
    setPrice(parseInt(value));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(editTablesRequest({ status, people, maxPeople, price }, Id));
    navigate('/');
  };

  if (!tableData) return <Navigate to='/' />;

  return (
    <Container className={clsx('my-4', styles.root)}>
      <Form onSubmit={handlesubmit} className={styles.form}>
        <h1>{tableData?.name}</h1>
        <p>
          <span className={styles.status}>Status: </span>
          <SelectForm defaultValue={status} handleChange={handleStatusChange} />
        </p>
        <p>
          <span className={styles.people}>People: </span>
          <InputForm fieldValue={people} handleChange={handlePeopleChange} />
          /
          <InputForm
            fieldValue={maxPeople}
            handleChange={handleMaxPeopleChange}
          />
        </p>
        {status === 'Busy' && (
          <p>
            <span className={styles.bill}>Bill: </span>$
            <InputForm fieldValue={price} handleChange={handlePriceChange} />
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
