import React from "react"; /* Importamos React */
import './TodoSearch.css'; /* Habilitamos su css */

/* Componente React to-do search */
/* Recibe props para manejo de estado de componente App (padre  ) */
function TodoSearch({ searchValue, setSearchValue }) {

  return(
    <input 
        placeholder="Cortar cebolla"
        className="TodoSearch"
        value={searchValue}
        onChange={ (event) => {
          console.log('Escribiste en el TodoSearch');
          setSearchValue(event.target.value); /* Actualizamos el estado con lo que escriba el usuario */
        }}
    />
  );
}

export { TodoSearch }; /* Export nombrado */