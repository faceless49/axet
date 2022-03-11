import { ReturnComponentType } from '../../types';
import { ProfileContainer } from '../Profile/ProfileContainer';

import '../../sass/_vars.scss';
import styles from './styles/Header.module.scss';

export const Header = (): ReturnComponentType => (
  <header className={styles.header}>
    <div className="container">
      <div className={styles.header_wrap}>
        <div className={styles.header_info}>
          <ProfileContainer />
        </div>
      </div>
    </div>
  </header>
);
