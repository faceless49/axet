import { ReturnComponentType } from '../../types';
import { Subtitle } from '../common/Subtitle/Subtitle';

import styles from './ExampleCode.module.scss';

export const ExampleCode = (): ReturnComponentType => (
  <div className={styles.sample}>
    <div className={styles.sample_wrap}>
      <Subtitle>Sample code</Subtitle>
      <pre className={styles.sample_example}>
        <code className={styles.code_wrap}>
          {`<div class='golden-grid'>
    <div style='grid-area:
    11 /  1 / span 10 / span
    12;'>
   </div>
</div>
            `}
        </code>
      </pre>
    </div>

    <div className={styles.sample_conditions}>
      <Subtitle>Availability</Subtitle>
      <span>Full-time</span>
      <Subtitle>Preferred Environment</Subtitle>
      <span>GitHub, Mac OSX</span>
    </div>
  </div>
);
