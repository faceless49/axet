import { ReturnComponentType } from '../../types';
import { Quote } from '../common/Quote/Quote';
import { Subtitle } from '../common/Subtitle/Subtitle';

import styles from './styles/Main.module.scss';

export const Main = (): ReturnComponentType => (
  <div className={styles.main}>
    <div className={styles.main_info}>
      <div className={styles.main_info_item}>
        <Subtitle>Portfolio</Subtitle>
      </div>
      <div>
        <Subtitle>Experience</Subtitle>
      </div>
      <div>
        <Subtitle>The Most Amazing</Subtitle>
        <Quote>The only true wisdom is in knowing you know nothing</Quote>
      </div>
      <div>
        <Subtitle>In clients I look for...</Subtitle>
        <Quote>There is only one good, knowledge, and one evil, ignorance.</Quote>
      </div>
    </div>

    <div className={styles.main_sample}>
      <div>
        <Subtitle>Sample code</Subtitle>
      </div>
      <div>
        <Subtitle>Availability</Subtitle>
      </div>
    </div>
  </div>
);
