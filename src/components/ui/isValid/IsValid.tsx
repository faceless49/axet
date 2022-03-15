import { ReturnComponentType } from '../../../types';

import styles from './IsValid.module.scss';

export const IsValid = (): ReturnComponentType => (
  <div className={styles.dummy_positioning}>
    <div className={styles.success_icon}>
      <div className={styles.success_icon__tip} />
      <div className={styles.success_icon__long} />
    </div>
  </div>
);
