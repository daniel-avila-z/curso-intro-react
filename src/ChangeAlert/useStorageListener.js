import React from "react";
// Custom Hook
function useStorageListener( sincronize ) {
    
    const [ storageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change) => {
        if (change.key === 'TODOS_V1') {
            console.log('hubo cambios en TODOS_V1');
            setStorageChange(true);
        }
    });

    const toggleShow = () => {
        sincronize();
        setStorageChange(false);
    }

    return {
        show:storageChange,
        toggleShow,
    }
}


export { useStorageListener }




// HOCS

// import React from "react";

// function useStorageListener(WrappedComponent) {
//     return function WrappedComponentWithStorageListener(props){
//         const [ storageChange, setStorageChange] = React.useState(false);

//         window.addEventListener('storage', (change) => {
//             if (change.key === 'TODOS_V1') {
//                 console.log('hubo cambios en TODOS_V1');
//                 setStorageChange(true);
//             }
//         });

//         const toggleShow = () => {
//             props.sincronize();
//             setStorageChange(false);
//         }

//         return (
//             <WrappedComponent
//                 show={storageChange}
//                 toggleShow={toggleShow}
//             />
//         )
//     }
// }

// export { useStorageListener }