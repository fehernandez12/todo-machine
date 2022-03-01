import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { AlertHelper } from "../Utilities/Utils";

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
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
  }

  const toggleTodo = (key) => {
    const todoIndex = todos.findIndex(todo => {
      return todo.text === key;
    });
    const newTodos = [...todos];
    let completed = newTodos[todoIndex].completed;
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
    AlertHelper.alertSuccess(
      '¡Genial!',
      completed ? '¡Has restaurado el ToDo \'' + key + '\'!': '¡Has cumplido el ToDo \'' + key + '\'!'
      );
  };
  
  const deleteTodo = (text) => {
    AlertHelper.alertWarning(
      '¡Cuidado!', '¡Vas a eliminar el ToDo \'' + text + '\'!'
    ).then(
        (result) => {
          if (result.isConfirmed) {
            const newTodos = todos.filter(todo => todo.text !== text);
            saveTodos(newTodos);
            AlertHelper.alertSuccess('¡Genial!', '¡Eliminaste el ToDo \'' + text + '\'!');
        }
      }
    );
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    console.log(newTodos)
    let newKey = newTodos.length ? (newTodos.length + 1) : 1;
    console.log(newKey);
    newTodos.push({
      completed: false,
      text: text
    });
    saveTodos(newTodos);
  };

  return (
    {
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      toggleTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo
    }
  );
}

export { useTodos };