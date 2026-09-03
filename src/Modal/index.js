import React from "react";
import ReactDOM from "react-dom";
import './Modal.css'; /* Habilitamos su css */

/* El props children para que transporte cualquiera que envuelva*/
function Modal({children}){
    //Return modificado regrresando lo que sea que recibe como children
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        
        //Indicamos que envie a lo que tenga el id modal
        document.getElementById('modal')
    );
}

export { Modal }; /* Export nombrado */