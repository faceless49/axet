import React, { KeyboardEvent, useState } from 'react';

import { useFormik } from 'formik';

// @ts-ignore
import notValidImg from '../../../assets/validateTicks/notvalid.png';
// @ts-ignore
import validImg from '../../../assets/validateTicks/valid.png';
import { ReturnComponentType } from '../../../types';
import styles from '../editableTitle/EditableTitle.module.scss';

type EditableSpanPropsType = {
  city: string;
  changeCity: (newCity: string) => void;
};

type FormikErrorType = {
  city?: string;
};

export const EditableSpan = React.memo(
  (props: EditableSpanPropsType): ReturnComponentType => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [isValidate, setIsValidate] = useState<boolean>(true);

    const formik = useFormik({
      initialValues: {
        city: props.city,
      },
      validate: values => {
        const errors: FormikErrorType = {};
        if (!values.city) {
          errors.city = 'Required';
          setIsValidate(false);
        } else if (
          !/(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14}$)/g.test(
            values.city,
          )
        ) {
          errors.city = 'Error Description';
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
      if (formik.values.city && isValidate) {
        props.changeCity(formik.values.city);
      }
      setEditMode(!activateEditMode);
    };

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === 'Enter') {
        offEditMode();
      }
    };

    const showError = !isValidate && (
      <span className={styles.input_error}>{formik.errors.city}</span>
    );

    return editMode ? (
      <div className={styles.input_wrap}>
        <label htmlFor="city" className={styles.input}>
          <input
            name="city"
            value={formik.values.city}
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
      <span onDoubleClick={activateEditMode}>{props.city}</span>
    );
  },
);
