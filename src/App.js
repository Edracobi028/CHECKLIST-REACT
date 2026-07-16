import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el curso react.js', completed: false}, 
  {text: 'Llorar con la llorona', completed: false},
  {text: 'Pagar el agua', completed: false},
  {text: 'lalaal', completed: false},
];

/* Componente REACT Nota: Los componentes con jsx (js + xml)react inician con Mayusculas*/
function App() {
  return (
    <>
      
      <TodoCounter completed={16} total={25}/>
      <TodoSearch/>

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
