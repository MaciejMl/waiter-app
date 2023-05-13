import { Container, Form } from 'react-bootstrap';
import styles from './Table.module.scss';
import clsx from 'clsx';
import Button from 'react-bootstrap/Button';
import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';

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
          <span>Status: </span>
          {tableData?.status}
        </p>
        <p>
          <span>People: </span>
          {tableData?.people}/{tableData?.maxPeople}
        </p>
        <p>
          <span>Bill: </span>${tableData?.price}
        </p>
        <Button variant='primary'>Update</Button>
      </Form>
    </Container>
  );
};

export default Table;
