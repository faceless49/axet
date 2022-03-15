import { useDispatch } from 'react-redux';

import { getSortedSkills } from '../../helpers/skillsSelector';
import { useAppSelector } from '../../hooks/useAppSelector';
import { actions } from '../../redux/actions/portfolio';
import { Nullable, ReturnComponentType } from '../../types';
import { Quote } from '../common/Quote/Quote';
import { Subtitle } from '../common/Subtitle/Subtitle';
import { EditableLink } from '../ui/editableLink/EditableLink';

import styles from './Portfolio.module.scss';
import { ProjectType, SkillType } from './types';

export const Portfolio = (): ReturnComponentType => {
  const projects = useAppSelector<Array<ProjectType>>(state => state.portfolio.projects);
  const skills = useAppSelector<Array<SkillType>>(getSortedSkills);

  const dispatch = useDispatch();

  const projectsElements = projects.map(({ id, name }) => (
    <li key={id} className={styles.projects_list_item}>
      <a href="www.google.com" className={styles.projects}>
        {name}
      </a>
    </li>
  ));

  const handleSetSkillExpClick = (skillId: string, skillExp: number): Nullable<void> => {
    dispatch(actions.updateExperience(skillId, skillExp));
  };

  return (
    <>
      <div className={styles.portfolio}>
        <Subtitle>Portfolio</Subtitle>
        <ul className={styles.projects_list}>{projectsElements}</ul>
      </div>
      <div className={styles.experience}>
        <Subtitle>Experience</Subtitle>
        <ul className={styles.projects_skills}>
          {skills.map(({ id, skillName, experience }) => (
            <li key={id} className={styles.projects_skills_items}>
              {skillName}{' '}
              <EditableLink
                skillExpId={id}
                onSetSkillExpClick={handleSetSkillExpClick}
                className={styles.projects_skills_items_exp}
                skillExperience={experience}
              />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Subtitle>The Most Amazing</Subtitle>
        <Quote>The only true wisdom is in knowing you know nothing...</Quote>
      </div>
      <div>
        <Subtitle>In clients I look for...</Subtitle>
        <Quote>There is only one good, knowledge, and one evil, ignorance.</Quote>
      </div>
    </>
  );
};
