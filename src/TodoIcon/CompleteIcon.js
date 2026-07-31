import React from 'react'; /* Habilitamos React */
import { TodoIcon } from './'; /* Habilitamos el componenete */

function CompleteIcon( {completed, onComplete} ){ /* Recibe para indicar el color segun su estado*/
  return(
    <TodoIcon 
        type="check"
        color={completed ? "green" : "gray"}
        onClick={onComplete}
    />
  );
}

export {CompleteIcon}; /* Export nombrado */