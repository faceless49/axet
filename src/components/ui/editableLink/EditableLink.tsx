import React, { ChangeEvent, KeyboardEvent, useCallback, useState } from 'react';

import styles from './EditableLink.module.scss';

type EditableSpanPropsType = {
  onSetSkillExpClick: (skillId: string, experience: number) => void;
  skillExperience: number;
  skillExpId: string;
  className: string;
};

export const EditableLink = React.memo((props: EditableSpanPropsType) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [skillExpValue, setSkillExpValue] = useState<number>(props.skillExperience);

  const activateEditMode = (): void => {
    setEditMode(true);
    setSkillExpValue(Number(props.skillExperience));
  };
  const offEditMode = (): void => {
    if (skillExpValue) {
      const skillValue = Number(skillExpValue);
      props.onSetSkillExpClick(props.skillExpId, skillValue);
    }
    setEditMode(!activateEditMode);
  };

  const changeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSkillExpValue(Number(e.currentTarget.value));
  }, []);
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      offEditMode();
    }
  };

  return editMode ? (
    <input
      type="number"
      value={skillExpValue}
      onBlur={offEditMode}
      onChange={changeTitle}
      onKeyPress={onKeyPressHandler}
      className={styles.input_exp}
    />
  ) : (
    <span onClick={activateEditMode} className={props.className} role="presentation">
      {props.skillExperience} years
    </span>
  );
});
