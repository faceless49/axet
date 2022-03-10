import { ReturnComponentType } from '../../../types';

export const Title = ({ children }: { children: string }): ReturnComponentType => (
  <h2>{children}</h2>
);
