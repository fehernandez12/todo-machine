import React from "react";
import { Modal } from "bootstrap";

function TodoButton(props) {
  
  const onClickButton = () => {
    const modal = new Modal(document.getElementById('modalDialog'));
    props.setOpenModal(true);
    modal.toggle();
  }

  return (
    <div className="d-grid gap-2">
      <button
        className="btn btn-primary"
        onClick={onClickButton}
      >
        + Crear ToDo Nuevo
      </button>
    </div>
  );  
}

export { TodoButton };