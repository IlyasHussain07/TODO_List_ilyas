import React, { useState } from 'react';
import Styles from './App.module.css';
import UnCheckIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import DeleteIcon from '@material-ui/icons/Delete';




export function TodoCompItems(props) {

    let { _id, name, handleInCompleteItems, handleDeleteItems } = props;

    const [isInCompEnable, setIsInCompEnable] = useState(false);
    const [isDelete, setIsDelete] = useState(false);

    return <li>
        <p>{name}</p>
        <div className={Styles.todoButtons}>
            <UnCheckIcon className={Styles.todoIcons}
                onClick={() => {
                    handleInCompleteItems(_id);
                }}
                onMouseEnter={() => setIsInCompEnable(true)}
                onMouseLeave={() => setIsInCompEnable(false)}
            />
            <DeleteIcon className={Styles.todoIcons}
                onClick={() => {
                    handleDeleteItems(_id);
                }}
                onMouseEnter={() => setIsDelete(true)}
                onMouseLeave={() => setIsDelete(false)}
            />
            <span className={isInCompEnable ? Styles.inComplete : Styles.inCompleteOff}>incomplete</span>
            <span className={isDelete ? Styles.deleteOn : Styles.deleteOff}>delete</span>
        </div>
    </li>;
}
