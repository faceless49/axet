import React from 'react';

import './App.scss';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { ReturnComponentType } from './types';

const App = (): ReturnComponentType => (
  <div className="App">
    <Header />
    <Main />
  </div>
);

export default App;
