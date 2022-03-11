import { FC } from 'react';

import styles from './Skill.module.scss';

type SkillItemPropsType = {
  title: string;
};

export const SkillItem: FC<SkillItemPropsType> = ({ title }) => (
  <span className={styles.skill}>{title}</span>
);
