import { useAppSelector } from '../../../hooks/useAppSelector';
import { ReturnComponentType } from '../../../types';
import { ProjectType } from '../types';

import { ProjectItem } from './ProjectItem/ProjectItem';
import styles from './ProjectList.module.scss';

export const ProjectList = (): ReturnComponentType => {
  const projects = useAppSelector<Array<ProjectType>>(state => state.portfolio.projects);

  return (
    <ul className={styles.projects_list}>
      {projects.map(({ id, name }) => (
        <ProjectItem key={id} id={id} name={name} />
      ))}
    </ul>
  );
};
