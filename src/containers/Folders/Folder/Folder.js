import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './Folder.module.css'

export default function Folder(props) {
    var activeClass;
    if (props.chosenFolderId === props.folder.id) {
        activeClass = styles.Chosen;
    }
    var isEditing = false;
    if (props.idOfFolderBeingEditted === props.folder.id){
        isEditing = true;
    }

    const folderDisplay = (
        <div className={[styles.Folder, activeClass].join(" ")}>
            <div className={styles.FolderName} onClick={() => props.updateCurrentFolder(props.folder.id)}>
                <p>{props.folder.name}</p>
            </div>
            <div className={[styles.Icon, styles.Lift].join(" ")}>
                <FontAwesomeIcon
                    onClick={() => props.changeBeingEdittedFolderId(props.folder.id)}
                    icon={faPencilAlt} />
            </div>
            <FontAwesomeIcon
                className={[styles.Icon, styles.Shake].join(" ")}
                onClick={() => props.deleteFolder(props.folder.id)}
                icon={faTrashAlt} />
        </div>);
    const folderEdit = (
        <div className={styles.Folder}>
            <input type="text" value={props.folder.name}
                onChange={(e) => props.editFolderName(e, props.folder.id)}
                onKeyPress={(e) => props.confirmChange(e, props.folder.id)}
                ></input>
            <FontAwesomeIcon className={styles.Icon}
                onClick={()=>{props.changeBeingEdittedFolderId(props.folder.id)}}
                icon={faCheck} />
        </div>
    );
    return isEditing ? folderEdit : folderDisplay;
}
