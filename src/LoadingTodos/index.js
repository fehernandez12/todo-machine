import React from "react";

function LoadingTodos() {
  return (
    <div className="d-flex align-items-center">
      <strong>Cargando ToDos...</strong>
      <div className="spinner-border ms-auto" role="status"></div>
    </div>
  );
}

export { LoadingTodos };