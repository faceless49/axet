import { ReturnComponentType } from '../../types';
import { Title } from '../common/Title/Title';

import styles from './styles/Header.module.scss';

export const Header = (): ReturnComponentType => (
  <header className={styles.header}>
    <Title>John Smith</Title>
  </header>
);
