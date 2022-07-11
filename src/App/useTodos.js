import React from "react";
import { useLocalStorage } from "./useLocalStorage";


function useTodos() {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
        sincronizeItem: sincronizeTodos,
      } = useLocalStorage('TODOS_V1', []);

      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);

      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if (!searchValue.length >= 1) {
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
      };
      //Aqui cree un if que no permite enviar un nuevo TODO sì no tiene una letra por lo menos
      const addTodo = (text) => {
       if(!text.length >= 1) {
          alert('Ingresa un texto');
       } else {
          const newTodos = [...todos];
          newTodos.push({
            completed: false,
            text,
          });
          saveTodos(newTodos);
       }
      };
    
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        // item[todoIndex] = {
        //   text: item[todoIndex].text,
        //   completed: true,
        // }
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        // item[todoIndex] = {
        //   text: item[todoIndex].text,
        //   completed: true,
        // }
        saveTodos(newTodos);
    };

    return {
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            addTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            sincronizeTodos,
          };
};

export { useTodos };