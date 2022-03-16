import React, { KeyboardEvent, useState } from 'react';

import { useFormik } from 'formik';

import { Input } from '../../common/Input/Input';

import styles from './EditableTitle.module.scss';
import { EditableTitlePropsType, FormikErrorType } from './type';

export const EditableTitle = React.memo((props: EditableTitlePropsType) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [isValidate, setIsValidate] = useState<boolean>(true);

  const formik = useFormik({
    initialValues: {
      title: props.title,
    },
    validate: values => {
      const errors: FormikErrorType = {};
      if (!values.title) {
        errors.title = 'Required';
        setIsValidate(false);
      } else if (
        !/(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14}$)/g.test(
          values.title,
        )
      ) {
        errors.title = 'Please use only letter or enter fullname';
        setIsValidate(false);
      } else {
        setIsValidate(true);
      }
      console.log(errors);
      return errors;
    },
    onSubmit: values => {
      console.log(JSON.stringify(values));
    },
  });

  const activateEditMode = (): void => {
    setEditMode(true);
  };
  const offEditMode = (): void => {
    if (formik.values.title && isValidate) {
      props.changeTitle(formik.values.title);
    }
    setEditMode(!activateEditMode);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      offEditMode();
    }
  };

  return editMode ? (
    <div className={styles.input_wrap}>
      <Input
        type="text"
        name="title"
        value={formik.values.title}
        onBlur={offEditMode}
        onChange={formik.handleChange}
        onKeyPress={onKeyPressHandler}
        error={isValidate}
        descriptionError={formik.errors.title}
      />
    </div>
  ) : (
    <h2
      onDoubleClick={activateEditMode}
      onTouchStart={activateEditMode}
      className={styles.title}
    >
      {props.title}
    </h2>
  );
});
