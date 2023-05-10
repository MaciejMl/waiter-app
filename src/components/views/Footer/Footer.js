import { Container } from 'react-bootstrap';
import styles from './Footer.module.scss';
import clsx from 'clsx';

const Footer = () => {
  return (
    <Container>
      <p className={clsx('text-muted', styles.center)}>
        Copyright &copy; WaiterApp 2023
      </p>
    </Container>
  );
};

export default Footer;
