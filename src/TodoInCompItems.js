import React, { useState } from 'react';
import Styles from './App.module.css';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/CheckBox';
import DeleteIcon from '@material-ui/icons/Delete';




export function TodoInCompItems(props) {

    let { _id, name, handleChangeItems, handleCompleteItems, handleDeleteItems } = props;

    const [isEditName, setIsEditName] = useState(name);

    const [isEdit, setIsEdit] = useState(false);

    const [isEditEnable, setIsEditEnable] = useState(false);
    const [isCompleteEnable, setIsCompleteEnable] = useState(false);
    const [isDeleteEnable, setIsDeleteEnable] = useState(false);




    return <li>
        {isEdit ?
            <input type="text"
                value={isEditName}
                onChange={(e) => setIsEditName(e.target.value)} />
            :
            <p>{name}</p>}
        <div className={Styles.todoButtons}>
            {isEdit ?
                <EditIcon className={Styles.todoIcons}
                    onClick={() => {
                        handleChangeItems(_id, isEditName);
                        setIsEdit(false);
                    }} />
                :
                <EditIcon className={Styles.todoIcons}
                    onClick={() => {
                        setIsEdit(true);
                    }}
                    onMouseEnter={() => setIsEditEnable(true)}
                    onMouseLeave={() => setIsEditEnable(false)}
                />}
            <CheckIcon className={Styles.todoIcons}
                onClick={() => {
                    handleCompleteItems(_id);
                }}
                onMouseEnter={() => setIsCompleteEnable(true)}
                onMouseLeave={() => setIsCompleteEnable(false)}
            />
            <DeleteIcon className={Styles.todoIcons}
                onClick={() => {
                    handleDeleteItems(_id);
                }}
                onMouseEnter={() => setIsDeleteEnable(true)}
                onMouseLeave={() => setIsDeleteEnable(false)}
            />

            <span className={isEditEnable ? Styles.edit : Styles.editOff}>edit</span>
            <span className={isCompleteEnable ? Styles.complete : Styles.completeOff}>Completed</span>
            <span className={isDeleteEnable ? Styles.delete : Styles.deleteOff}>delete</span>
        </div>
    </li>;
}
