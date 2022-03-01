import React from "react";

function TodosError() {
  return (
    <div className="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>¡Demonios!</strong> Acaba de suceder un error.
      <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
    </div>
  );
}

export {TodosError};