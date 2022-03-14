import React, { KeyboardEvent, useState } from 'react';

import { useFormik } from 'formik';

// @ts-ignore
import notValidImg from '../../../assets/validateTicks/notvalid.png';
// @ts-ignore
import validImg from '../../../assets/validateTicks/valid.png';

import styles from './EditableTitle.module.scss';

type EditableSpanPropsType = {
  title: string;
  changeTitle: (title: string) => void;
};

type FormikErrorType = {
  title?: string;
};

export const EditableTitle = React.memo((props: EditableSpanPropsType) => {
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
        errors.title = 'Error Description';
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
  const showError = !isValidate && (
    <span className={styles.input_error}>{formik.errors.title}</span>
  );

  return editMode ? (
    <div className={styles.input_wrap}>
      <label htmlFor="title" className={styles.input}>
        <input
          name="title"
          value={formik.values.title}
          onBlur={offEditMode}
          onChange={formik.handleChange}
          onKeyPress={onKeyPressHandler}
        />
        <img
          src={isValidate ? validImg : notValidImg}
          className={styles.input_validate}
          alt="validate img"
        />
      </label>
      {showError}
    </div>
  ) : (
    <h2 onDoubleClick={activateEditMode} className={styles.title}>
      {props.title}
    </h2>
  );
});
