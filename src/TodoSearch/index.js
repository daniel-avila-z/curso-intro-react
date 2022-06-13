import React from "react";
import './TodoSearch.css';
import { TodoContext } from "../TodoContext";

function TodoSearch() {
 const {searchValue, setSearchValue} = React.useContext(TodoContext);
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return(
        <input className="TodoSearch" 
        placeholder="Busca una tarea"
        value={searchValue}
        onChange={onSearchValueChange}
        />
    );
};

export {TodoSearch};