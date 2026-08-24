import React from 'react';
import { AppUI } from './AppUI'; /* Importamos el componente AppUI */
import { TodoProvider } from '../TodoContext'; /* Importamos el provider */

/* Componente REACT Nota: Los componentes con jsx (js + xml)react inician con Mayusculas*/
function App() {

  return (
      
    <TodoProvider>    {/* Enviamos info (props) a componente App UI */}
      <AppUI/>        {/* Encapsulamos dentro del componente provider para que recibir props*/}
    </TodoProvider>
   );
}

export default App;
