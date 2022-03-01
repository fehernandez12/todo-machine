import React from "react";

function EmptySearchResults({text}) {
  return (
    <div className="alert alert-warning" role="alert">
      <strong>¡No hay ningún ToDo que coincida con {text}!</strong> Intenta buscar otras palabras.
    </div>
  );
}

export { EmptySearchResults };