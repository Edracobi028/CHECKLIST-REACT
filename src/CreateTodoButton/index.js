import './CreateTodoButton.css'; /* Habilitamos los estilos */

/* Componente React create to-do button */
function CreateTodoButton() {
  return(
    <button className="CreateTodoButton" onClick={ (event) => {
        console.log('le diste click');
        console.log(event);
        console.log(event.target);
      }
    }>+</button>
  );
}

export { CreateTodoButton }; /* Export nombrado */