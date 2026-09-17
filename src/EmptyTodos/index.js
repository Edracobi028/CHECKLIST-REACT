import React from "react"; /* Importamos React */

/* Componente React to-do search */
/* Recibe props para manejo de estado de componente App (padre  ) */
function EmptyTodos() {

  return(
    <p className="TodoMessage">¡Crea tu primer tarea!</p>
  );
}

export { EmptyTodos }; /* Export nombrado */