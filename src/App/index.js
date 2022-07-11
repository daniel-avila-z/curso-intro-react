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
import { LoadingTodo } from '../LoadingTodo';
import { EmptyTodos } from '../EmptyTodos';
import { TodosError } from '../ErrorTodos';
import { ChangeAlert } from '../ChangeAlert'

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
    sincronizeTodos,
    } = useTodos();

    return (
      <React.Fragment>
       <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          // loading={loading}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          // loading={loading}
        />
       </TodoHeader>
            <TodoList
              error={error}
              loading={loading}
              totalTodos={totalTodos}
              searchedTodos={searchedTodos}
              onError={() => <TodosError />}
              onLoading={() => <LoadingTodo />}
              onEmptyTodos={() => <EmptyTodos />}
              searchText={searchValue}
              onEmptySearchResults={
                (searchText) => <h3>🤔No hay resultados para {searchText}</h3>
              }
              render={todo => (
                  <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              )}
            >
              {/* {todo => (
                  <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              )} */}

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

        <ChangeAlert
          sincronize= {sincronizeTodos}
        />

        <Footer />
      </React.Fragment>
    );
};

export default App;
