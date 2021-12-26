import React from "react";
import { TodoContext } from "../TodoContext";

function TodoSearch() {

	const { searchValue, setSearchValue } = React.useContext(TodoContext);

	const onSearchValueChange = (event) => {
		setSearchValue(event.target.value);
	}

	return (
		<input type="text" name="" id="" placeholder="Buscar ToDo..." className="form-control mb-3"
			value={searchValue}
			onChange={onSearchValueChange} />
	);
}

export { TodoSearch };