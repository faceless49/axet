import React, { KeyboardEvent, useCallback, useState } from 'react';

import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../../../redux/actions/portfolio';
import { AppRootStateType } from '../../../redux/store';
import { ReturnComponentType } from '../../../types';
import { SkillItem } from '../../Portfolio/Skill/SkillItem';
import { SkillType } from '../../Portfolio/types';
import { Plus } from '../../ui/plus/Plus';

import styles from './SkillList.module.scss';

type FormikErrorType = {
  skillName?: string;
};

export const SkillsList = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [isValidate, setIsValidate] = useState<boolean>(true);

  const skills = useSelector<AppRootStateType, Array<SkillType>>(
    state => state.portfolio.skills,
  );
  const formik = useFormik({
    initialValues: {
      skillName: '',
    },
    validate: values => {
      const errors: FormikErrorType = {};
      if (!values.skillName) {
        errors.skillName = 'Required';
        setIsValidate(false);
      } else if (!/^[a-zA-Z\s]*$/g.test(values.skillName)) {
        errors.skillName = 'Please use only letters';
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

  const handleRemoveSkillDClick = useCallback(
    (skillId: string) => {
      const action = actions.removeSkill(skillId);
      dispatch(action);
    },
    [dispatch],
  );
  const activateEditMode = (): void => {
    setEditMode(true);
  };
  const offEditMode = (): void => {
    if (formik.values.skillName && isValidate) {
      dispatch(actions.addSkill(formik.values.skillName));
    }
    setEditMode(!activateEditMode);
  };
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      offEditMode();
    }
  };

  const textError = !isValidate && (
    <span className={styles.input_error}>{formik.errors.skillName}</span>
  );

  return (
    <div className={styles.skills}>
      {skills.map(({ id, skillName }) => (
        <SkillItem
          key={id}
          skillId={id}
          title={skillName}
          onRemoveSkillClick={handleRemoveSkillDClick}
        />
      ))}
      {editMode ? (
        <>
          <input
            name="skillName"
            value={formik.values.skillName}
            onBlur={offEditMode}
            onChange={formik.handleChange}
            onKeyPress={onKeyPressHandler}
          />
          {textError}
        </>
      ) : (
        <button type="submit" className={styles.btn} onClick={activateEditMode}>
          <Plus />
        </button>
      )}
    </div>
  );
};
