// import logo from './logo.svg';
// import './App.css';
// return (<img src={logo} className="App-logo" alt="logo" />
import React from 'react';
import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoHeader } from '../TodoHeader';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { LoadingTodo } from '../LoadingTodo'

import { Footer } from '../Footer';
// const defaultitem=[
//   {text: 'Hacer la compra', completed: true},
//   {text: 'Respirar', completed:true},
//   {text: 'Exalar', completed: false},
  
// ]
//React Hook



function App() {
  const {error, 
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,
    } = useTodos();

    return (
      <React.Fragment>
       <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
       </TodoHeader>
        
            <TodoList>
              {error && <h3>🚩Chale, hubo un error</h3>}
              {loading && <LoadingTodo />}
              {(!loading && !searchedTodos.length) && <h3>Crea TODOs🚀</h3>}
              {searchedTodos.map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
            {!!openModal && (
              <Modal>
                <TodoForm
                addTodo={addTodo}
                setOpenModal={setOpenModal} 
                />
              </Modal>
            )}
        <CreateTodoButton 
          setOpenModal={setOpenModal}
        />
        <Footer />
      </React.Fragment>
    );
};

export default App;
