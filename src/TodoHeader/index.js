import React from "react";

function TodoHeader({children, loading}) {
    return (
        <header>
            {React.Children.toArray(children)
            .map(child => React.cloneElement(child, { loading }) )}
        </header>
    )
}

export { TodoHeader };

// function TodoHeader({ children, loading }) {
//     //No importa si viene un elemento, o dos o null siempre nos devuelve un array
  
//     return (
//       <header>
//         {React.Children.toArray(children).map((child) =>
//           React.cloneElement(child, { loading: loading })
//         )}
//       </header> //Por cada child vamos a llamar a clone element.
//     ); //Crear elemento a partir de otro (elemento, objeto con las props que queramos que tenga)
//   }