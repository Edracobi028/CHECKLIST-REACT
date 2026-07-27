import './TodoItem.css'; /* Habilitamos su css */
import { CompleteIcon } from './CompleteIcon'; /* Habilitamos el componenete */
import { DeleteIcon } from './DeleteIcon'; /* Habilitamos el componenete */

/* Componente React to-doItem */
function TodoItem(props) {
  return(
    <li className="TodoItem">
        <CompleteIcon completed={props.completed} onComplete={props.onComplete}/> {/* cargar la propiedad completed */}
        <p 
          className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
            {props.text}
        </p>
        <DeleteIcon onDelete={props.onDelete}/>
    </li>
  );
}

export { TodoItem }; /* Export nombrado */