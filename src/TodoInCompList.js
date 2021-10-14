import React from 'react';
import Styles from './App.module.css';
import { TodoInCompItems } from "./TodoInCompItems";

export function TodoInCompList(props) {

    let { CurrentState, handleChangeItems, handleCompleteItems, handleDeleteItems } = props;

    return <div className={Styles.todoInCompList}>
        <div className={Styles.todoItems}>
            {CurrentState.length === 0 ?
                <p
                    style={{
                        color: "red",
                        fontSize: "18px",
                        padding: "20px",
                        textAlign: 'center'
                    }}
                >No items are added to TODO, Add items to TODO List</p> :
                <ul>
                    {CurrentState.map((item) => {
                        return <TodoInCompItems
                            key={item._id}
                            _id={item._id}
                            name={item.name}
                            handleChangeItems={handleChangeItems}
                            handleCompleteItems={handleCompleteItems}
                            handleDeleteItems={handleDeleteItems} />;
                    })}
                </ul>}
        </div>
    </div>;
}
