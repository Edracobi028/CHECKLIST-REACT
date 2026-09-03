import React from 'react';
import { useLocalStorage } from './useLocalStorage'; /* Importamos el custom hook */

/* === CONTEXT === */
const TodoContext = React.createContext(); // Creamos y nombramos un contexto

/* === COMPONENTE === */
/* === PROVIDER PERSONALIZADO === */
function TodoProvider({children}){
    /* === ESTADOS === */

    /* Usamos el custom hook y enviamos el nombre y el estado */
    const { 
        item: todos, 
        saveItem: saveTodos,
        loading, 
        error
    } = useLocalStorage('CHECKLIST_V1', []);   

    /* === ESTADOS === */
    const [searchValue, setSearchValue] = React.useState('');             /* estado para lo que escriban los usuarios con valor inicial vacio con useReactState */
    const [openModal, setOpenModal] = React.useState(false);            /* estado para el abrir o cerrar el modal */

    /* === ESTADOS DERIVADOS === */
    const completedTodos = todos.filter(todo => !!todo.completed).length; /* Filtramos las tareas completadas y nos devuelve true o false (!!)*/
    const totalTodos = todos.length;                                      /* Contamos el total de todos */
    
    /* Ejecuciones especificas Solamente se ejecuta cuando completedTodos cambia */
    /* Los efectos no se ejecutan de inmediato en cada render, solo cuando las dependencias cambian */

    const searchedTodos = todos.filter(todo => {                          /* buscamos las coincidencias en el texto de los to-do´s */
        const todoText = todo.text.toLowerCase();                           /* obtenemos en minusculas el texto */
        const searchText = searchValue.toLowerCase();                       /* obtenemos en minusculas la busqueda */
        return todoText.includes(searchText);                               /* devolvemos la coincidencia */
    });

    /* === FUNCIONES === */
    const addTodo = (text) => {     
        const newTodos = [...todos];                                        /* Funcion para agregar to-do´s */
        newTodos.push({ text, completed: false });                          //agregar lo recibido al array de tareas 
        saveTodos(newTodos);
    }

    const completeTodo = (text) => {                                       /* Funcion para completar to-do´s */
        const newTodos = [...todos];                                        /* copia de todos los to-do´s */
        
        const todoIndex = newTodos.findIndex(todo => todo.text === text);   /* Obtenemos el indice del to-do a modificar */
        newTodos[todoIndex].completed = true;                               /* Modificamos el estado del to-do a true (completado) */
        saveTodos(newTodos);
    }
    const deleteTodo = (text) => {                                        /* Funcion para eliminar to-do´s */
        const newTodos = [...todos];  /* copia de todos los to-do´s */
        const todoIndex = newTodos.findIndex(todo => todo.text === text);   /* Obtenemos el indice del to-do a eliminar */
        newTodos.splice(todoIndex, 1); /* Eliminamos el to-do */
        saveTodos(newTodos);
    }

    return(
        /* Exponer en toda la app por la prop value */
        <TodoContext.Provider value={{
            loading, 
            error, 
            completedTodos, 
            totalTodos, 
            searchValue, 
            setSearchValue, 
            searchedTodos,
            addTodo,
            completeTodo, 
            deleteTodo, 
            openModal, 
            setOpenModal}}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }; //Exportamos nombrado