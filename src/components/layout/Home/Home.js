import TableStatus from '../../features/TableStatus/TableStatus';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className='mt-4 mb-4 px-0'>
      <h1 className='mb-3'>All tables</h1>
      <TableStatus />
      <TableStatus />
      <TableStatus />
      <TableStatus />
      <TableStatus />
    </Container>
  );
};

export default Home;
