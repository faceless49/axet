import { useSelector } from 'react-redux';

import { AppRootStateType } from '../../redux/store';
import { ReturnComponentType } from '../../types';
import { Quote } from '../common/Quote/Quote';
import { Subtitle } from '../common/Subtitle/Subtitle';

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

  return (
    <>
      <Subtitle>Portfolio</Subtitle>
      <Subtitle>Experience</Subtitle>
      <ul className={styles.projects_list}>{projectsElements}</ul>
      <ul>
        <li>PHP</li>
        <li>RUBY</li>
        <li>JavaScript</li>
      </ul>
      <Subtitle>The Most Amazing</Subtitle>
      <Subtitle>In clients I look for...</Subtitle>
      <Quote>The only true wisdom is in knowing you know nothing</Quote>
      <Quote>There is only one good, knowledge, and one evil, ignorance.</Quote>
    </>
  );
};
