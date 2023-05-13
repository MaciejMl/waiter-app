import { Container, Form } from 'react-bootstrap';
import styles from './Table.module.scss';
import clsx from 'clsx';
import Button from 'react-bootstrap/Button';

const Table = () => {
  return (
    <Container className={clsx('my-4', styles.root)}>
      <Form className={styles.form}>
        <h1>Table 1</h1>
        <p>
          <span>Status: </span>
        </p>
        <p>
          <span>People: </span>/
        </p>
        <p>
          <span>Bill: </span>$
        </p>
        <Button variant='primary'>Update</Button>
      </Form>
    </Container>
  );
};

export default Table;
