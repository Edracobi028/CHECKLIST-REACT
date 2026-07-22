import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text: 'Llevar a caminar a garritas', completed: true},
  {text: 'Tomar el curso react.js', completed: false}, 
  {text: 'Surtir el super', completed: false},
  {text: 'Pagar el agua', completed: false},
  {text: 'Lavar el coche', completed: false},
];

/* Componente REACT Nota: Los componentes con jsx (js + xml)react inician con Mayusculas*/
function App() {
  /* === Estados === */
  const [todos, setTodos] = React.useState(defaultTodos);
  /* creamos un estado para lo que escriban los usuarios con valor inicial vacio*/
  const [searchValue, setSearchValue] = React.useState(''); /* Manejamos el estado con useReactState */

  /* === Estados Derivados === */
  const completedTodos = todos.filter(todo => !!todo.completed).length; /* Filtramos los todos completados y nos devuelve true o false (!!)*/
  const totalTodos = todos.length; /* Contamos el total de todos */
  
  console.log('Los usuarios buscan todos de: ' + searchValue); /* Mostramos en consola lo que escriben los usuarios */
  return (
    <>
      
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />{/* Props  */}

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton/>
    </>
  );
}


  

export default App;
