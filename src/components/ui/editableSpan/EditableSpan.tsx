import React, { KeyboardEvent, useState } from 'react';

import { useFormik } from 'formik';

import { ReturnComponentType } from '../../../types';
import { IsValid } from '../isValid/IsValid';
import { NotValid } from '../notValid/notValid';

import styles from './EditableSpan.module.scss';
import { EditableSpanPropsType, FormikErrorType } from './type';

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
        } else if (!/^[A-Za-z0-9,\. ]{3,50}$/g.test(values.city)) {
          errors.city = 'Please enter country and city, use only letters';
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

    const textError = !isValidate && (
      <span className={styles.input_error}>{formik.errors.city}</span>
    );

    const finalInputClassName = `${
      !isValidate
        ? styles.input_label
        : `${`${styles.error_input} ${styles.input_label}`}`
    }`;

    return editMode ? (
      <div className={styles.input_wrap}>
        <label htmlFor="city" className={styles.input}>
          <input
            name="city"
            value={formik.values.city}
            onBlur={offEditMode}
            onChange={formik.handleChange}
            onKeyPress={onKeyPressHandler}
            className={finalInputClassName}
          />
          {!isValidate ? <NotValid /> : <IsValid />}
        </label>
        {textError}
      </div>
    ) : (
      <span
        onDoubleClick={activateEditMode}
        onTouchStart={activateEditMode}
        className={styles.city}
      >
        {props.city}
      </span>
    );
  },
);
