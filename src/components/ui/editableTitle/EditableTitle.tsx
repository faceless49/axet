import React, { ChangeEvent, KeyboardEvent, useCallback, useState } from 'react';

import styles from './EditableTitle.module.scss';

type EditableSpanPropsType = {
  title: string;
  changeTitle: (title: string) => void;
};

export const EditableTitle = React.memo((props: EditableSpanPropsType) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(props.title);

  const activateEditMode = (): void => {
    setEditMode(true);
    setTitle(props.title);
  };
  const offEditMode = (): void => {
    if (title) {
      props.changeTitle(title);
    }
    setEditMode(!activateEditMode);
  };

  const changeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  }, []);
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      offEditMode();
    }
  };

  return editMode ? (
    <input
      value={title}
      onBlur={offEditMode}
      onChange={changeTitle}
      onKeyPress={onKeyPressHandler}
    />
  ) : (
    <h2 onDoubleClick={activateEditMode} className={styles.title}>
      {props.title}
    </h2>
  );
});
