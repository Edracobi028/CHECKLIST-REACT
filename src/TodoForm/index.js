import React from "react";
import './TodoForm.css';                        /* Habilitamos su css */
import { TodoContext } from "../TodoContext";   /* Habilitamos el contexto */

function TodoForm() {

    /* === ESTADOS LOCALES === */
    
     //crear variable para consumir del contexto y tomar props que necesitemos
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [ newTodoValue, setNewTodoValue] = React.useState(''); //guardar en local el valor de lo que escribe


    const onSubmit = (event)=>{
        event.preventDefault(); //evitar que se recargue la pagina
        addTodo(newTodoValue); //enviarle el nuevo valor
        setOpenModal(false); //cerrar el modal al enviar el formulario
    }

    const onCancel = ()=>{
        setOpenModal(false); //abrir el modal
    }

    const onChange = (event)=>{
        setNewTodoValue(event.target.value); //guardar en el estadp
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nueva tarea</label>
            <textarea placeholder="Esta seria una nueva tarea" 
            value={newTodoValue}
            onChange={onChange}
            required
            />
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel" type="button" onClick={onCancel}>Cancelar</button>
                <button className="TodoForm-button TodoForm-button--add" type="submit">Agregar</button>
            </div>
        </form>
    );
}

export { TodoForm }; /* Export nombrado */