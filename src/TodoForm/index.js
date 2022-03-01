import React from "react";
import { AlertHelper } from "../Utilities/Utils";

function TodoForm({addTodo, setOpenModal}) {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
    setNewTodoValue('');
    AlertHelper.alertSuccess('¡Genial!', '¡Creaste un nuevo ToDo!');
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <div className="modal-header">
          <h6 className="modal-title">Crear ToDo</h6>
          <button className="btn-close" data-bs-dismiss="modal" type="button"></button>
        </div>
        <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="text" className="form-label">Tarea que vas a hacer:</label>
              <textarea name="text" id="text" className="form-control" placeholder="Escribe la tarea aquí." value={newTodoValue} onChange={onChange} />
            </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-sm btn-warning" data-bs-dismiss="modal">Cerrar</button>
          <button type="submit" className="btn btn-sm btn-primary" data-bs-dismiss="modal">Crear ToDo</button>
        </div>
      </form>
    </React.Fragment>
  );
}

export { TodoForm };