import React from "react";
/* === CUSTOM HOOK === */                                               /* Inician hooks de react con la palabra use  */

/* custom hook que recibe el nombre de plantilla default de to-do's y valor inicial*/
function useLocalStorage(itemName, initialValue){ 
  
  /* === ESTADOS === */
  const localStorageItem = localStorage.getItem(itemName);             /* obtenemos las tareas del localStorage */
  let parsedItem;                                                      //inicializar

  if (!localStorageItem){                                               //Si esta vacio creamos un array vacio y lo guardamos en el localStorage
    localStorage.setItem(itemName, JSON.stringify([]));                 //local storage sea un array vacio stringifiado
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);                          //PARSEAMOS el string del localStorage que encuentre
  }

  const [item, setItem ] = React.useState(parsedItem);                  //estado del custom hook

  /* Funcion que recibe nuevas tareas que actualice al estado y al localStorage */
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));            //Guarda en localstorage
    setItem(newItem);                                                   //Guarda en estados
  }
  return [item, saveItem];                                              //regresamos los to-do´s y la funcion para guardarlos
}

export { useLocalStorage }; /* Export nombrado */