export type EditableSpanPropsType = {
  city: string;
  changeCity: (newCity: string) => void;
};

export type FormikErrorType = {
  city?: string;
};
