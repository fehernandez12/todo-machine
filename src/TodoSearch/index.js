import React from "react";

function TodoSearch({ searchValue, setSearchValue, loading }) {

	const onSearchValueChange = (event) => {
		setSearchValue(event.target.value);
	}

	return (
		<input type="text" name="" id="" placeholder="Buscar ToDo..." className="form-control mb-3"
			value={searchValue}
			onChange={onSearchValueChange} disabled={loading} />
	);
}

export { TodoSearch };