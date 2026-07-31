 import { ReactComponent as CheckSVG } from './check.svg';  /* importamos SVG renombrando */
 import { ReactComponent as DeleteSVG } from './delete.svg';  /* importamos SVG renombrando */
 import './TodoIcon.css'; /* Habilitamos estilos */

 /* CATALOGO DE TIPOS ICONOS */
 const iconTypes = {
    "check": (color) => <CheckSVG className="Icon-svg" fill={color}/>,
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color}/>
 }
 
 /* Funcion que reciba el tipo de icono check o delete*/
 function TodoIcon( {type, color, onClick } ){
    return (
        <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
            {iconTypes[type](color)} {/* Renderizamos el icono correspondiente al tipo */}
        </span>
    )
 }

 export {TodoIcon}; /* Export nombrado */