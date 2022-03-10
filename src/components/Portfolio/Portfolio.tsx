import { useState } from 'react';

import { ReturnComponentType } from '../../types';

export const Portfolio = (): ReturnComponentType => {
  const [projects, setProjects] = useState<Array<string>>([
    'Bootstrap 4 Material Design',
    'Modern JavaScript stack',
    'Datepicker for twitter bootstrap',
    'Fast and reliable Bootstrap widgets in Angular ',
  ]);

  return <div />;
};
