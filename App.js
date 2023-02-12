import React, { useState } from 'react';
import './App.scss';
import { Login } from './Login';
import { Register } from './Register';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = formName => {
    setCurrentForm(formName);
  };
  return (
    <div className="Header">
      <div className="Left-Menu">Menu</div>
      <div className="Titlu">
        <h1>E-Library</h1>
      </div>
      <div className="right-Menu">
        {currentForm === 'login' ? (
          <Login onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </div>
    </div>
  );
}

export default App;
