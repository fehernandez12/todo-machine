import React from "react";
import { TodoContext } from "../TodoContext";
import Swal from "sweetalert2";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const {
    addTodo,
    setOpenModal
  } = React.useContext(TodoContext);

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
    Swal.fire(
      {
        icon: 'success',
        titleText: '¡Genial!',
        text: '¡Creaste un nuevo ToDo!',
        customClass: {
          container: 'body-font',
          confirmButton: 'btn btn-success'
        },
        buttonsStyling: false
      }
    )
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <div className="modal-header">
          <h5 className="modal-title">Crear ToDo</h5>
          <button className="btn-close" data-bs-dismiss="modal" type="button"></button>
        </div>
        <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="text" className="form-label">Tarea que vas a hacer:</label>
              <textarea name="text" id="text" className="form-control" placeholder="Escribe la tarea aquí." value={newTodoValue} onChange={onChange} />
            </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Crear ToDo</button>
        </div>
      </form>
    </React.Fragment>
  );
}

export { TodoForm };