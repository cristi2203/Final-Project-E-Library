import React, { useState } from 'react';
import './App.scss';
import { Login } from './Login';
import { Register } from './Register';
import donateABook from './Images/donateBook.jpg';
import findABook from './Images/findBook.jpg';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = formName => {
    setCurrentForm(formName);
  };
  return (
    <>
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
      <div className="donate-find-container">
        <div className="donate-a-book">
          <img src={donateABook} alt="donate-book" />
        </div>
        <div className="find-a-book">
          <img src={findABook} alt="find-book" />
        </div>
      </div>
    </>
  );
}

export default App;
