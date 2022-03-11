import { ReturnComponentType } from '../../../types';

import styles from './Plus.module.scss';

export const Plus = (): ReturnComponentType => (
  <>
    <span className={styles.first} />
    <span className={styles.second} />
  </>
);