import styles from './UserModal.module.css'
import React, {useState} from "react";
import Portal from "../../../Portal/Portal";
import StatusDrawer from "../StatusDrawer/StatusDrawer";
import {getStatus} from "../UserUtils";

export default function UserModal(props) {
    let {name,fname,mname,status,handleClick }=props;
    const [coordsX, setCoordsX] = useState(null);
    const [coordsY, setCoordsY] = useState(null);
    const [dropdownOn, setDropdownOn] = useState(false);

    return (
        <div className={styles.modal}>
            <div className={styles.modalWindow}>
                <div className={styles.modalHeader}>
                    <div className={styles.modalName}>{fname + ' ' + name}</div>
                    <div className={styles.removeDiv} onClick={(e) => {
                        handleClick()
                    }}><img src={'remove.png'}/></div>
                    <div className={styles.line}/>
                </div>
                <div className={styles.button}>
                    <text>Сохранить</text>
                </div>
                <div className={styles.modalText}>
                    <text>{fname}</text>
                </div>
                <div className={styles.modalText} style={{marginLeft: '302px'}}>
                    <text>{name}</text>
                </div>
                <div className={styles.modalText} style={{marginLeft: '570px'}}>
                    <text>{mname}</text>
                </div>
                <div onClick={e => {
                    const rect = e.target.getBoundingClientRect();
                    {
                        setCoordsX(rect.x);
                        setCoordsY(rect.y + window.scrollY + 22);
                        setDropdownOn(!dropdownOn);
                    }
                }} className={styles.statusDropDown}>
                    <text>{getStatus(status)}</text>
                    {
                        dropdownOn &&
                        <Portal>
                            <StatusDrawer status={status} coordX={coordsX}
                                          coordY={coordsY}/>
                        </Portal>
                    }
                    <a className={styles.path}><img src={'/path.png'}/></a>
                </div>
            </div>
        </div>
    )
}
