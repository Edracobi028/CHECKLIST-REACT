import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

/* const defaultTodos = [
  {text: 'Llevar a caminar a garritas', completed: true},
  {text: 'Tomar el curso react.js', completed: false}, 
  {text: 'Surtir el super', completed: false},
  {text: 'Pagar el agua', completed: false},
  {text: 'Lavar el coche', completed: false},
]; 

localStorage.setItem('CHECKLIST_V1', JSON.stringify(defaultTodos)); //Local Storage solo almacena strings, por eso usamos JSON.stringify para convertir el array en string
*/

//localStorage.removeItem('CHECKLIST_V1'); /* Eliminamos el localStorage para que no se guarde la informacion de los to-do´s */

/* Componente REACT Nota: Los componentes con jsx (js + xml)react inician con Mayusculas*/
function App() {
  /* === Estados === */
  const localStorageTodos = localStorage.getItem('CHECKLIST_V1');       /* obtenemos las tareas del localStorage */

  let parsedTodos;                                                      //inicializar

  if (!localStorageTodos){                                              //Si esta vacio creamos un array vacio y lo guardamos en el localStorage
    localStorage.setItem('CHECKLIST_V1', JSON.stringify([]));           //local storage sea un array vacio stringifiado
    parsedTodos = [];

  } else {
    parsedTodos = JSON.parse(localStorageTodos);                        //PARSEAMOS el string del localStorage que encuentre
  }


  const [todos, setTodos] = React.useState(parsedTodos);
  /* creamos un estado para lo que escriban los usuarios con valor inicial vacio*/
  const [searchValue, setSearchValue] = React.useState('');             /* Manejamos el estado con useReactState */

  /* === Estados Derivados === */
  const completedTodos = todos.filter(todo => !!todo.completed).length; /* Filtramos los todos completados y nos devuelve true o false (!!)*/
  const totalTodos = todos.length;                                      /* Contamos el total de todos */
  
  const searchedTodos = todos.filter(todo => {                          /* buscamos las coincidencias en el texto de los to-do´s */
    const todoText = todo.text.toLowerCase();                           /* obtenemos en minusculas el texto */
    const searchText = searchValue.toLowerCase();                       /* obtenemos en minusculas la busqueda */
    return todoText.includes(searchText);                               /* devolvemos la coincidencia */
  });
  /* === FUNCION === */

  /* Funcion que reciba nuevas tareas que actualice al estado y al localStorage */
  const saveTodos = (newTodos) => {
    localStorage.setItem('CHECKLIST_V1', JSON.stringify(newTodos));     // Guarda en localstorage
    setTodos(newTodos);                                                //Guarda en estados
  }
  
  const completeTodo = (text) => {                                      /* Funcion para completar to-do´s */
    const newTodos = [...todos];                                        /* copia de todos los to-do´s */
    
    const todoIndex = newTodos.findIndex(todo => todo.text === text);   /* Obtenemos el indice del to-do a modificar */
    newTodos[todoIndex].completed = true;                               /* Modificamos el estado del to-do a true (completado) */
    saveTodos(newTodos);
  }
  const deleteTodo = (text) => {                                        /* Funcion para eliminar to-do´s */
    const newTodos = [...todos];  /* copia de todos los to-do´s */
    const todoIndex = newTodos.findIndex(todo => todo.text === text);   /* Obtenemos el indice del to-do a eliminar */
    newTodos.splice(todoIndex, 1); /* Eliminamos el to-do */
    saveTodos(newTodos);
  }
  return (
    <>
      
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />{/* Props para escuchar lo que busca el usuario    */}

      <TodoList>
        {/* Renderiza desde las to-do´s buscados */}
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete = {() => completeTodo(todo.text)} /* envuelve en AF para ejecutarse solo al dar click y no antes */
            onDelete = {() => deleteTodo(todo.text)} /* envuelve en AF para ejecutarse solo al dar click y no antes */
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
    </>
  );
}


  

export default App;
