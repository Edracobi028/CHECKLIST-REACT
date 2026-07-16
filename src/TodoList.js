import './TodoList.css'; /* Habilitamos su css */
/* Componente React to-do list que recibe props */
function TodoList({children}) {
  return(
    <ul className="TodoList">
      {children} {/* children para que renderize lo que envuelva el componente */}
    </ul>
  );
}

export { TodoList }; /* Export nombrado */