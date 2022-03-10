import { ReturnComponentType } from '../../../types';

import styles from './styles/Quote.module.scss';

export const Quote = ({ children }: { children: string }): ReturnComponentType => (
  <q className={styles.quote}>{children}</q>
);
