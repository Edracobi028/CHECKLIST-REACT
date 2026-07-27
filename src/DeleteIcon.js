import React from 'react'; /* Habilitamos React */
import { TodoIcon } from './TodoIcon'; /* Habilitamos el componente */

function DeleteIcon( { onDelete }){
  return(
    <TodoIcon
      type="delete"
      color="gray"
      onClick={onDelete}
    />
  );
}
export {DeleteIcon}; /* Export nombrado */
 