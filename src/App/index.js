import React, { useState } from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { NavBar } from "../NavBar";
import { TodoButton } from "../TodoButton";
import { TodoModal } from "../TodoModal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { LoadingTodos } from "../LoadingTodos";
import { EmptyTodos } from "../EmptyTodos";
import { EmptySearchResults } from "../EmptySearchResults";
import './App.scss';

function App(props) {
  const {
    error,
    loading,
    searchedTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue
  } = useTodos();

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="row my-5 mx-3 mx-lg-0">
        <div className="col-xl-4 offset-xl-4 col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
          <TodoHeader>
            <TodoCounter
              totalTodos={totalTodos}
              completedTodos={completedTodos}
              loading={loading}
            />
            <hr />
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              loading={loading}
            />
          </TodoHeader>
          <TodoList
            error={error}
            loading={loading}
            searchedTodos={searchedTodos}
            totalTodos={totalTodos}
            searchText={searchValue}
            onError={() => <TodosError />}
            onLoading={() => <LoadingTodos />}
            onEmptyTodos={() => <EmptyTodos />}
            onEmptySearchResults={(searchText) => <EmptySearchResults text={searchText} />}
            render={todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onToggle={() => toggleTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            )}
          >
            {todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onToggle={() => toggleTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            )}
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
                <TodoForm setOpenModal={setOpenModal} addTodo={addTodo} />
              </div>
            </div>
          </div>
        </TodoModal>
      </div>
    </React.Fragment>
  );
}

export default App;
