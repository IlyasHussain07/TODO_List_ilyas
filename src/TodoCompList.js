import React from 'react';
import Styles from './App.module.css';
import { TodoCompItems } from "./TodoCompItems";

export function TodoCompList(props) {

    let { CurrentState, handleInCompleteItems, handleDeleteItems } = props;

    return <div className={Styles.todoCompItems}>
        <h1>Completed Items</h1>
        <div className={Styles.todoItems}>
            {CurrentState.length === 0 ?
                <p
                    style={{
                        color: "red",
                        fontSize: "18px",
                        padding: "20px",
                        textAlign: 'center'
                    }}
                >No Completed Items are there!</p> :
                <ul>
                    {CurrentState.map((item) => {
                        return <TodoCompItems
                            key={item._id}
                            _id={item._id}
                            name={item.name}
                            handleInCompleteItems={handleInCompleteItems}
                            handleDeleteItems={handleDeleteItems} />;
                    })}
                </ul>}
        </div>
    </div>;
}
