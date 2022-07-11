import React from 'react';
import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css';

function ChangeAlert({ sincronize }) {
    const { show, toggleShow } = useStorageListener(sincronize);

    if (show) {
        return(
            <div className='ChangeAlert-bg'>
                <div className='ChangeAlert-container'>
                    <h2>Hubo cambios en tus TODOs de otra pestaña</h2>
                    <h2>¿Quieres sincronizar tus TODOs?</h2>
                    <button
                        className='TodoForm-button TodoForm-button--add'
                        onClick={toggleShow}
                    >
                        Siiiuuuu♻
                    </button>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export { ChangeAlert }