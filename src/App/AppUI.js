/* === COMPONENTE UI === */ 
import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

/* Recibe lo que se le envia desde index app  */
function AppUI({ loading, error, completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo }) {

    /* Muestra la interfaz de usuario */
    return (
        <>
            <TodoCounter completed={completedTodos} total={totalTodos}/>
            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />{/* Props para escuchar lo que busca el usuario    */}

            <TodoList>
                {/* Mostrar mensaje segun su Estado y muestra cargando u error */}
                {loading && <p>Estamos cargando, por favor espere...</p>}
                {error && <p>Tenemos un error...</p>}

                {/* Si no esta cargando y no hay tareas muestra msj */}
                {(!loading && !searchedTodos.length) && <p>¡Crea tu primer tarea!</p>}

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

            <CreateTodoButton/>
        </>
    );
}

export { AppUI }; /* Export nombrado */