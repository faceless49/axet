import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  KeyboardEvent,
} from 'react';

import { Nullable } from '../../../types';
import { IsValid } from '../../ui/isValid/IsValid';
import { NotValid } from '../../ui/notValid/notValid';

import styles from './Input.module.scss';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputPropsType = DefaultInputPropsType & {
  // not standtart options
  onEnter: () => void;
  onChangeText: (value: string) => void;
  error: boolean;
  descriptionError: string;
};

export const Input: React.FC<Partial<InputPropsType>> = ({
  onChange,
  onChangeText,
  onEnter,
  onKeyPress,
  name,
  type,
  value,
  onBlur,
  error,
  descriptionError,
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): Nullable<void> => {
    // eslint-disable-next-line no-unused-expressions
    onChange && // если есть пропс onChange
      onChange(e); // то передать ему е (поскольку onChange не обязателен)

    // eslint-disable-next-line no-unused-expressions
    onChangeText && onChangeText(e.currentTarget.value);
  };

  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>): Nullable<void> => {
    // eslint-disable-next-line no-unused-expressions
    onKeyPress && onKeyPress(e);

    // eslint-disable-next-line no-unused-expressions
    onEnter && // если есть пропс onEnter
      e.key === 'Enter' && // и если нажата кнопка Enter
      onEnter(); // то вызвать его
  };

  const finalInputClassName = `${!error ? styles.error_input : styles.input_label}`;

  return (
    <div className={styles.form_wrap}>
      <div className={styles.input_wrap}>
        <label htmlFor={name} className={styles.input}>
          <input
            className={finalInputClassName}
            onChange={onChangeCallback}
            onKeyPress={onKeyPressCallback}
            name={name}
            type={type}
            value={value}
            onBlur={onBlur}
          />
          {!error ? <NotValid /> : <IsValid />}
        </label>
      </div>
      {!error && <span className={styles.error}>{descriptionError}</span>}
    </div>
  );
};
