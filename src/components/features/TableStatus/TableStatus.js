import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import styles from './TableStatus.module.scss';
import Stack from 'react-bootstrap/Stack';
import clsx from 'clsx';

const TableStatus = () => {
  return (
    <Container className={clsx('px-0 pb-4 mt-4', styles.root)}>
      <Stack direction='horizontal' gap={3} className='align-items-center'>
        <h3 className='m-0'>Table 1</h3>
        <p className='m-0'>
          <span>Status: </span>Reserved
        </p>
        <Button className='ms-auto' variant='primary'>
          Show more
        </Button>
      </Stack>
    </Container>
  );
};

export default TableStatus;
