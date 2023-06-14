import TableStatus from '../../features/TableStatus/TableStatus';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchTables } from '../../../redux/tablesRedux';
import { getAllTables } from '../../../redux/tablesRedux';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import { useCallback } from 'react';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const tables = useSelector(getAllTables);

  const dispatch = useDispatch();

  const memoizedFetchTables = useCallback(() => {
    dispatch(fetchTables());
  }, [dispatch]);

  useEffect(() => {
    memoizedFetchTables();
  }, [memoizedFetchTables]);

  useEffect(() => {
    if (tables.length) {
      setLoading(false);
    }
  }, [tables]);

  if (loading) {
    return (
      <Container className='mt-4 mb-4 px-0'>
        <div className='d-flex align-items-center'>
          <span className='ms-4'>Loading...</span>
          <Spinner animation='border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        </div>
      </Container>
    );
  }

  return (
    <Container className='mt-4 mb-4 px-0'>
      <h1 className='mb-3'>All tables</h1>
      {tables.map((table) => (
        <TableStatus key={table.id} {...table} />
      ))}
    </Container>
  );
};

export default Home;
