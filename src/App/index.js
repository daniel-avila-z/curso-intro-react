// import logo from './logo.svg';
// import './App.css';
// return (<img src={logo} className="App-logo" alt="logo" />
import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

// const defaultitem=[
//   {text: 'Hacer la compra', completed: true},
//   {text: 'Respirar', completed:true},
//   {text: 'Exalar', completed: false},
  
// ]
//React Hook



function App() {
  

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
};

export default App;
