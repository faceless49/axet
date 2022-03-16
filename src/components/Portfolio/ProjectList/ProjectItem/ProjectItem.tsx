import React from 'react';

import styles from './ProjectItem.module.scss';

type ProjectItemPropsType = {
  id: string;
  name: string;
};

export const ProjectItem: React.FC<ProjectItemPropsType> = ({ id, name }) => (
  <li key={id} className={styles.projects_list_item}>
    <a href="www.google.com" className={styles.projects_list_item_link}>
      {name}
    </a>
  </li>
);
