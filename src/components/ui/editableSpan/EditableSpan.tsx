import React, { KeyboardEvent, useState } from 'react';

import { useFormik } from 'formik';

import { ReturnComponentType } from '../../../types';

import styles from './EditableSpan.module.scss';

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
        } else if (!/^[a-zA-Z\s]*$/g.test(values.city)) {
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
        </label>
        {textError}
      </div>
    ) : (
      <span onDoubleClick={activateEditMode} className={styles.city}>
        {props.city}
      </span>
    );
  },
);
