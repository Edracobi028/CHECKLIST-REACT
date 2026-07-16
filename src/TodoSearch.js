import React from "react"; /* Importamos React */
import './TodoSearch.css'; /* Habilitamos su css */

/* Componente React to-do search */
function TodoSearch() {

  /* creamos un estado para lo que escriban los usuarios con valor inicial vacio*/
  const [searchValue, setSearchValue] = React.useState(''); /* Manejamos el estado con useReactState */
  
  console.log('Los usuarios buscan todos de: ' + searchValue); /* Mostramos en consola lo que escriben los usuarios */

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