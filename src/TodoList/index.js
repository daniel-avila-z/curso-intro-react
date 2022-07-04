import React from "react";
import './TodoList.css';
function TodoList(props){
    const renderFunct = props.render || props.children;
    return(
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

            {props.searchedTodos.map(renderFunct)}

            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList};