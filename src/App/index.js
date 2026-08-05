import React from 'react';
import { useLocalStorage } from './useLocalStorage'; /* Importamos el custom hook */
import { AppUI } from './AppUI'; /* Importamos el componente AppUI */


/* Componente REACT Nota: Los componentes con jsx (js + xml)react inician con Mayusculas*/
function App() {
  /* === ESTADOS === */

  const [todos, saveTodos] = useLocalStorage('CHECKLIST_V1', []);        /* Usamos el custom hook y enviamos el nombre y el estado */
  /* creamos un estado para lo que escriban los usuarios con valor inicial vacio*/
  const [searchValue, setSearchValue] = React.useState('');             /* Manejamos el estado con useReactState */

  /* === Estados Derivados === */
  const completedTodos = todos.filter(todo => !!todo.completed).length; /* Filtramos los todos completados y nos devuelve true o false (!!)*/
  const totalTodos = todos.length;                                      /* Contamos el total de todos */
  
  const searchedTodos = todos.filter(todo => {                          /* buscamos las coincidencias en el texto de los to-do´s */
    const todoText = todo.text.toLowerCase();                           /* obtenemos en minusculas el texto */
    const searchText = searchValue.toLowerCase();                       /* obtenemos en minusculas la busqueda */
    return todoText.includes(searchText);                               /* devolvemos la coincidencia */
  });

  /* === FUNCIONES === */
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
  return (
    /* Enviamos info a componente App UI */
   <AppUI
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue} 
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
   />
   );
}

export default App;
