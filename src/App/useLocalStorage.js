/* === CUSTOM HOOK === */ 
import React from "react";          /* Inician hooks de react con la palabra use  */

                                              
/* custom hook que recibe el nombre de plantilla default de to-do's y valor inicial*/
function useLocalStorage(itemName, initialValue){ 
  
  /* === ESTADOS === */
  const [item, setItem ] = React.useState(initialValue);                  //estado del custom hook CON EL VALOR INICIAL DEL LOCAL STORAGE
  const [loading, setLoading] = React.useState(true);                   //Estado llamado loading para conocer si esta cargando
  const [error, setError] = React.useState(false);                      //Estado llamado error para conocer si hay un error

  /* === EFECTOS === */
  /* encapsularlas con un UseEffect en un lapso de tiempo 2-3 seg para darles un estado y un msj de carga o error */

  React.useEffect( ()=> {     
    setTimeout(() => { 
      try {
      const localStorageItem = localStorage.getItem(itemName);             //obtenemos las tareas del localStorage
      let parsedItem;                                                      //inicializar

      if (!localStorageItem){                                               //Si esta vacio creamos un array vacio y lo guardamos en el localStorage
          localStorage.setItem(itemName, JSON.stringify([]));               //local storage sea un array vacio stringifiado
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);                          //PARSEAMOS el string del localStorage que encuentre
        setItem(parsedItem);                                                //Guardamos en el estado lo que traiga el localStorage
      }
      setLoading(false);                                                    //Cambia el estado loading a false si traemos el local storage
    }catch(error){
    setLoading(false);                                                      //Si hay un error cambia el estado loading a false
    setError(true);                                                         //Si hay un error lo guardamos en el estado error
    console.error(error);                                                   //Mostramos el error en la consola
    }
    },4000);
}, []);                                                                     // Se deja un array vacio para que el efecto se ejecute solo una vez al montar el componente
 

  /* Funcion que recibe nuevas tareas que actualice al estado y al localStorage */
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));            //Guarda en localstorage
    setItem(newItem);                                                   //Guarda en estados
  }

  /* Si son mas de dos cosas a retornar, se recomienda usar un objeto en lugar de un array */
  return {item, saveItem, loading, error};                              //regresamos las tareas (item), la funcion para guardarlos estado loading y error
}

export { useLocalStorage }; /* Export nombrado */