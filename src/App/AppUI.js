/* === COMPONENTE UI === */ 
import React from 'react';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext'; /* Importamos el contexto */

/* Recibe lo que se le envia desde index app  */
function AppUI() {

    const { loading, error, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext); /* Recibimos el contexto global de la aplicacion */

    /* Muestra la interfaz de usuario */
    return (
        <>
            <TodoCounter />
            <TodoSearch />{/* Props para escuchar lo que busca el usuario    */}
                <TodoList>
                    
                    {loading && <><TodosLoading/><TodosLoading/><TodosLoading/><TodosLoading/></>}  {/* Si esta cargando aparece esto */}
                    {error && <TodosError/>}                                                        {/* Si hay un error aparece esto */}
                    {(!loading && !searchedTodos.length) && <EmptyTodos/>}                          {/* Si no hay tareas muestra esto */}

                    {/* Renderiza desde las to-do´s buscados */}
                    {searchedTodos.map(todo => (
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed}
                        onComplete = {() => completeTodo(todo.text)} /* envuelve en AF para ejecutarse solo al dar click y no antes */
                        onDelete = {() => deleteTodo(todo.text)} /* envuelve en AF para ejecutarse solo al dar click y no antes */
                    />
                    ))}
                </TodoList>
            <CreateTodoButton setOpenModal={setOpenModal}/>
            {/* Componente Modal con portal Js y un estado para cierre*/}
            {openModal &&(
                <Modal>
                    <TodoForm/>
                </Modal>
            )}
        </>
    );
}

export { AppUI }; /* Export nombrado */