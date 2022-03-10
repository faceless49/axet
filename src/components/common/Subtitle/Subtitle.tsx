import { ReturnComponentType } from '../../../types';

export const Subtitle = ({ children }: { children: string }): ReturnComponentType => (
  <h3>{children}</h3>
);
