import React from "react";
import { TodoContext } from '../TodoContext';
import './Form.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onChange = (event) =>{
        setNewTodoValue(event.target.value)
    };

    const onCancel = () => {
        setOpenModal(false)
    };
    const onSubmit= (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);

    };

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tù nuevo TODO💬🗨📌📋📝✏</label>
            <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder="Crea una tarea"
            />
            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
                >
                    Cancelar❌
                </button>
                <button
                type="submit"
                className="TodoForm-button TodoForm-button--add"
                onClick={onSubmit}
                >
                    Añadir✅
                </button>
            </div>
        </form>
    );
};

export { TodoForm };