import './App.css';

import Header from './components/Header';
import React, { useState } from 'react';
import SignUpForm from './components/SignUpForm';



function App() {
  return (
    <div className="App">
    <Header />
    <SignUpForm />
    </div>
  );
  
  };

export default App;
