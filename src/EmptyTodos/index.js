import React from "react";

function EmptyTodos() {
  return (
    <div className="alert alert-info" role="alert">
      <strong>¡No hay ningún ToDo!</strong> Crea tu primer ToDo para comenzar.
    </div>
  );
}

export { EmptyTodos };