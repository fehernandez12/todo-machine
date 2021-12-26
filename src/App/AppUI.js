import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { NavBar } from "../NavBar";
import { TodoButton } from "../TodoButton";
import { TodoModal } from "../TodoModal";
import { TodoForm } from "../TodoForm";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    toggleTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);
  
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="row my-5 mx-3 mx-lg-0">
        <div className="col-xl-4 offset-xl-4 col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
          <TodoCounter />
          <hr />
          <TodoSearch />
          <TodoList>
            {error && <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>¡Demonios!</strong> Acaba de suceder un error.
              <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
            </div>}
            {loading && <div className="d-flex align-items-center">
              <strong>Cargando ToDos...</strong>
              <div className="spinner-border ms-auto" role="status"></div>
            </div>}
            {(!loading && !searchedTodos.length) && <div className="alert alert-info" role="alert">
              <strong>¡No hay ningún ToDo!</strong> Crea tu primer ToDo para comenzar.
            </div>}
            
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onToggle={() => toggleTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          <hr />
          <TodoButton
            setOpenModal={setOpenModal}
          >
          </TodoButton>
        </div>
        <TodoModal>
          <div className="modal fade" id="modalDialog">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content text-dark">
                <TodoForm />
              </div>
            </div>
          </div>
        </TodoModal>
      </div>
    </React.Fragment>
  );
}

export { AppUI };