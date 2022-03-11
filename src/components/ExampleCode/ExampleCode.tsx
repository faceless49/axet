import { ReturnComponentType } from '../../types';
import { Subtitle } from '../common/Subtitle/Subtitle';

import styles from './ExampleCode.module.scss';

export const ExampleCode = (): ReturnComponentType => (
  <div className={styles.code}>
    <Subtitle>Sample code</Subtitle>
    <div className={styles.code_wrap}>
      <pre className={styles.code_sample}>
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
  </div>
);
