import { useDispatch, useSelector } from 'react-redux';

import { selectSortedSkills } from '../../helpers/skillsSelector';
import { actions } from '../../redux/actions/portfolio';
import { Nullable, ReturnComponentType } from '../../types';
import { Quote } from '../common/Quote/Quote';
import { Subtitle } from '../common/Subtitle/Subtitle';
import { EditableLink } from '../ui/editableLink/EditableLink';

import styles from './Portfolio.module.scss';
import { ProjectList } from './ProjectList/ProjectList';

export const Portfolio = (): ReturnComponentType => {
  const sortedSkills = useSelector(selectSortedSkills);

  const dispatch = useDispatch();

  const handleSetSkillExpClick = (skillId: string, skillExp: number): Nullable<void> => {
    dispatch(actions.updateExperience(skillId, skillExp));
  };

  return (
    <>
      <div className={styles.portfolio}>
        <Subtitle>Portfolio</Subtitle>
        <ProjectList />
      </div>
      <div className={styles.experience}>
        <Subtitle>Experience</Subtitle>
        <ul className={styles.projects_skills}>
          {sortedSkills.map(({ id, skillName, experience }) => (
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
