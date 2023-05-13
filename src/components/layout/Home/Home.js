import TableStatus from '../../features/TableStatus/TableStatus';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchBooks } from '../../../redux/tablesRedux';
import { getAllTables } from '../../../redux/tablesRedux';
import { useSelector } from 'react-redux';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const tables = useSelector(getAllTables);
  console.log(tables);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchTables = async () => {
  //     try {
  //       await dispatch(fetchBooks());
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //       setLoading(false);
  //     }
  //   };
  //   fetchTables();
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchBooks());
    setLoading(false);
  }, [dispatch]);

  if (loading) {
    return (
      <Container className='mt-4 mb-4 px-0'>
        <p>Loading...</p>
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
