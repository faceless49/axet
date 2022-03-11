import { useSelector } from 'react-redux';

import { AppRootStateType } from '../../redux/store';
import { ReturnComponentType } from '../../types';

import styles from './Portfolio.module.scss';
import { ProjectType } from './types';

export const Portfolio = (): ReturnComponentType => {
  const projects = useSelector<AppRootStateType, Array<ProjectType>>(
    state => state.portfolio.projects,
  );

  const projectsElements = projects.map(({ id, name }) => (
    <li key={id} className={styles.projects_list_item}>
      <a href="www.google.com" className={styles.projects}>
        {name}
      </a>
    </li>
  ));

  return <ul className={styles.projects_list}>{projectsElements}</ul>;
};
