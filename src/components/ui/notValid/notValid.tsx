import { ReturnComponentType } from '../../../types';

import styles from './NotValid.module.scss';

export const NotValid = (): ReturnComponentType => (
  <button type="button" className={styles.close_btn} aria-label="Close" />
);
