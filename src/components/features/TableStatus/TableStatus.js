import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import styles from './TableStatus.module.scss';
import Stack from 'react-bootstrap/Stack';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const TableStatus = ({ name, status, id }) => {
  const navigate = useNavigate();

  return (
    <Container className={clsx('px-0 pb-4 mt-4', styles.root)}>
      <Stack direction='horizontal' gap={3} className='align-items-center'>
        <h3 className='m-0'>{name}</h3>
        <p className='m-0'>
          <span>Status: </span>
          {status}
        </p>
        <Button
          onClick={() => navigate(`/tables/${id}`)}
          className='ms-auto'
          variant='primary'
        >
          Show more
        </Button>
      </Stack>
    </Container>
  );
};

TableStatus.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default TableStatus;
