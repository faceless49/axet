import { ReturnComponentType } from '../../../types';

import styles from './styles/Subtitle.module.scss';

export const Subtitle = ({ children }: { children: string }): ReturnComponentType => (
  <h3 className={styles.subtitle}>{children}</h3>
);
