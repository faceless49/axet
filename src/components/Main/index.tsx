import { ReturnComponentType } from '../../types';
import { Availability } from '../Availability/Availability';
import { Quote } from '../common/Quote/Quote';
import { Subtitle } from '../common/Subtitle/Subtitle';
import { ExampleCode } from '../ExampleCode/ExampleCode';
import { Portfolio } from '../Portfolio/Portfolio';

import styles from './styles/Main.module.scss';

export const Main = (): ReturnComponentType => (
  <div className="container">
    <div className={styles.main}>
      <div className={styles.main_info}>
        <div className={styles.main_info_item}>
          <Subtitle>Portfolio</Subtitle>
          <Portfolio />
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
        <ExampleCode />
        <Availability />
      </div>
    </div>
  </div>
);
