import React from 'react';
import FirstComponent from './FirstComponent';
import NamedComponent from './NamedComponent';

const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Bob" />
    </div>
  );
};

export default App;