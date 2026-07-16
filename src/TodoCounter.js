import './TodoCounter.css'; /* Habilitamos su css */

/* Componente React to-do counter */
function TodoCounter({total, completed}) {
  return(
    <h1 className="TodoCounter">
        Has completado <span>{completed}</span> de <span>{total}</span> To-Do´s
    </h1>
  );
}

/* Export nombrado */
export { TodoCounter };