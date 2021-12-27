import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import Swal from "sweetalert2";

const TodoContext = React.createContext();

function TodoProvider(props) {
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
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
    Swal.fire(
      {
        icon: 'success',
        titleText: '¡Genial!',
        text: '¡Has cumplido la tarea \'' + key + '\'!',
        customClass: {
          container: 'body-font',
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
      }
    );
  };
  
  const deleteTodo = (text) => {
    Swal.fire(
      {
        icon: 'warning',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        titleText: '¡Cuidado!',
        text: '¡Vas a eliminar la tarea \'' + text + '\'!',
        showCancelButton: true,
        customClass: {
          container: 'body-font',
          confirmButton: 'btn btn-primary me-3',
          cancelButton: 'btn btn-danger'
        },
        cancelButtonText: 'Lo pensaré dos veces',
        confirmButtonText: 'Sé lo que hago',
        buttonsStyling: false
      }
      ).then(
        (result) => {
          if (result.isConfirmed) {
            const newTodos = todos.filter(todo => todo.text !== text);
            saveTodos(newTodos);
            Swal.fire(
              {
                icon: 'success',
                titleText: '¡Genial!',
                text: '¡Eliminaste la tarea \'' + text + '\'!',
                customClass: {
                  container: 'body-font',
                  confirmButton: 'btn btn-primary'
                },
                buttonsStyling: false
              }
            );
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
    <TodoContext.Provider value={
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
    }>
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };