// import React, { useState } from 'react';
//
// type AddItemFormPropsType = {
//   addSkill: (newTitle: string) => void;
//   disabled?: boolean;
// };
//
// export const AddItemForm = React.memo((props: AddItemFormPropsType) => {
//   // Обернули в хок, но у нас в пропсах addItem callback, поэтому перерисовка все равно произойдет
//
//   const [title, setTitle] = useState('');
//   const [error, setError] = useState<null | string>(null);
//
//   // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
//   //   setTitle(e.currentTarget.value);
//   // };
//
//   // const onClickHandler = useCallback(() => {
//   //   if (title) {
//   //     props.addItem(title.trim());
//   //     setTitle('');
//   //     setError(null);
//   //   } else {
//   //     setError('Title is required');
//   //   }
//   // }, [props, title]);
//
//   // const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
//   //   if (error !== null) {
//   //     setError(null);
//   //   }
//   //   if (e.key === 'Enter') {
//   //     onClickHandler();
//   //   }
//   // };
//
//   return (
//     <div>
//       <button onClick={onClickHandler} disabled={props.disabled} />
//     </div>
//   );
// });
export default (): void => {};
