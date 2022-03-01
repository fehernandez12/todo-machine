import React from "react";
import './TodoCounter.css';

function TodoCounter({totalTodos, completedTodos, loading}) {
	return (
		loading ?
			(<h2 className="title-font TodoCounter">
				<div className="spinner-grow">
					<span className="visually-hidden">Loading...</span>
				</div> Cargando...
			</h2>) :
			(<h2 className="title-font TodoCounter">
				Has completado {completedTodos} de {totalTodos} ToDos
			</h2>)
	);
}

export { TodoCounter };