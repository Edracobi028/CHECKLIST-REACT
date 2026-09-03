import './CreateTodoButton.css'; /* Habilitamos los estilos */

/* Componente React create to-do button */
/* Recibimos el estado de abrir o cerrar modal */
function CreateTodoButton( {setOpenModal} ) {
  return(
    <button className="CreateTodoButton" onClick={ 
        () => {
          setOpenModal(state => !state); /* Cambia el estado del modal */
        }
    }>+</button>
  );
}

export { CreateTodoButton }; /* Export nombrado */