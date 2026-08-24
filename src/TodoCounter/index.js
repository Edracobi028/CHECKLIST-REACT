import './TodoCounter.css'; /* Habilitamos su css */
import React from 'react'; /* Importamos React */
import { TodoContext } from '../TodoContext'; /* Importamos el contexto global de la aplicacion */

/* Componente React to-do counter */
function TodoCounter() {
  /* Recibir las props desde el contexto global de la aplicacion */
  // Enviamos el contexto y el resultado los recibimos en un objeto indicando las propiedades a recibir totalTodos y completedTodos
  const { completedTodos, totalTodos } = React.useContext(TodoContext); /* Recibimos el contexto global de la aplicacion */


  return(
    <h1 className="TodoCounter">
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> To-Do´s
    </h1>
  );
}

/* Export nombrado */
export { TodoCounter };