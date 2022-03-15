import { FC, useState } from 'react';

import { Nullable } from '../../../types';

import styles from './Skill.module.scss';

type SkillItemPropsType = {
  title: string;
  onRemoveSkillClick: (skill: string) => void;
  skillId: string;
};

export const SkillItem: FC<SkillItemPropsType> = ({
  skillId,
  title,
  onRemoveSkillClick,
}) => {
  const [isRemoveSkillMode, setRemoveSkillMode] = useState(false);

  const onSetRemoveSkillMode = (): Nullable<void> => {
    console.log('click');
    setRemoveSkillMode(true);
  };

  const removeOnClick = (): Nullable<void> => {
    onRemoveSkillClick(skillId);
  };

  return (
    <div className={styles.skill_wrap}>
      <span className={styles.skill} onDoubleClick={onSetRemoveSkillMode}>
        {title}
      </span>
      {isRemoveSkillMode && (
        <button
          type="button"
          onClick={removeOnClick}
          aria-label="Delete skill"
          className={styles.skill_btn}
        >
          x
        </button>
      )}
    </div>
  );
};
