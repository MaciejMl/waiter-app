import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import styles from './Table.module.scss';
import clsx from 'clsx';
import Button from 'react-bootstrap/Button';
import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';
import InputForm from '../../common/InputForm/InputForm';

const Table = () => {
  const { Id } = useParams();

  const allData = useSelector(getAllTables);
  const tableData = allData.find((table) => table.id === parseInt(Id));

  if (!tableData) return <Navigate to='/' />;
  return (
    <Container className={clsx('my-4', styles.root)}>
      <Form className={styles.form}>
        <h1>{tableData?.name}</h1>
        <p>
          <span className={styles.status}>Status: </span>
          <Form.Select className={styles.select} aria-label='status select'>
            <option value='1'>{tableData?.status}</option>
          </Form.Select>
        </p>
        <p>
          <span className={styles.people}>People: </span>
          <InputForm fieldValue={tableData?.people} />
          /<InputForm fieldValue={tableData?.maxPeople} />
        </p>
        <p>
          <span className={styles.bill}>Bill: </span>$
          <InputForm fieldValue={tableData?.price} />
        </p>
        <Button variant='primary'>Update</Button>
      </Form>
    </Container>
  );
};

export default Table;
