import React, { ReactElement } from 'react';

import { ReturnComponentType } from '../../types';
import { Subtitle } from '../common/Subtitle/Subtitle';

import styles from './About.module.scss';
import { Highlighter } from './Highlight/Highlighter';

export const About = ({ children }: { children: ReactElement }): ReturnComponentType => (
  <div className={styles.about}>
    <div className={styles.about_example}>
      <Subtitle>Sample code</Subtitle>
      <Highlighter />
    </div>

    <div className={styles.about_conditions}>
      <Subtitle>Availability</Subtitle>
      <span>Full-time</span>
      <Subtitle>Preferred Environment</Subtitle>
      <span>GitHub, Mac OSX</span>
    </div>
    <div className={styles.about_map}>{children}</div>
  </div>
);
