import React from "react";

function TodoItem(props) {
  return (
    <div className="col text-light my-2">
      <div className="card bg-regular-blue border-0">
        <div className="card-header d-flex justify-content-between">
          <span>
          {props.text}
          </span>
          <span className={props.completed ? 'badge bg-success' : 'badge bg-danger'}>
            {props.completed ? <span><i className="bi-check badge-icon"></i> Completado</span> : <span><i className="bi-x-circle badge-icon"></i> No completado</span>}
          </span>
        </div>
        <div className="card-body">
          <div className="d-grid gap-2">
            <button
              className={`btn btn-primary`}
              onClick={props.onToggle}
            >
              Marcar / Desmarcar
            </button>
            <button className="btn btn-sm btn-warning" onClick={props.onDelete}>Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { TodoItem };