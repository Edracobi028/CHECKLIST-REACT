import React from "react"; /* Importamos React */
import './TodosLoading.css'; /* Habilitamos su css */

/* Componente React to-do search */
/* Recibe props para manejo de estado de componente App (padre  ) */
function TodosLoading() {

  return(
    
    <div className="LoadingTodo-container">
        <span className="LoadingTodo-completeIcon"></span>
        <p className="LoadingTodo-text"></p>
        <span className="LoadingTodo-deleteIcon"></span>
    </div>
  );
}

export { TodosLoading }; /* Export nombrado */