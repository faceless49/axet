import { ReturnComponentType } from '../../types';
import { ExampleCode } from '../ExampleCode/ExampleCode';
import { Portfolio } from '../Portfolio/Portfolio';

import styles from './styles/Main.module.scss';

export const Main = (): ReturnComponentType => (
  <div className="container">
    <div className={styles.main}>
      <div className={styles.main_info}>
        <Portfolio />
      </div>
      <div className={styles.main_sample}>
        <ExampleCode />
      </div>
    </div>
  </div>
);
