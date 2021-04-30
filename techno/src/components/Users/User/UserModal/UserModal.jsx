import styles from './UserModal.module.css'
import React, {useState} from "react";
import Portal from "../../../Portal/Portal";
import StatusDrawer from "../StatusDrawer/StatusDrawer";
import {getStatus} from "../User";

export default function UserModal(props) {
    /*constructor(props) {
        super(props);
        this.handleClick = this.props.handleClick;
        props = {
            name: props.name,
            fname: props.fname,
            mname: props.mname,
            status: props.status,
            isOn: false,
            coordsX: null,
            coordsY: null
        }
    }*/

    const [coordsX, setCoordsX] = useState(null);
    const [coordsY, setCoordsY] = useState(null);
    const [dropdownOn, setDropdownOn] = useState(false);

    return (
        <div className={styles.modal}>
            <div className={styles.modalWindow}>
                <div className={styles.modalHeader}>
                    <div className={styles.modalName}>{props.fname + ' ' + props.name}</div>
                    <div className={styles.removeDiv} onClick={(e) => {
                        props.handleClick()
                    }}><img src={'remove.png'}/></div>
                    <div className={styles.line}/>
                </div>
                <div className={styles.button}>
                    <text>Сохранить</text>
                </div>
                <div className={styles.modalText}>
                    <text>{props.fname}</text>
                </div>
                <div className={styles.modalText} style={{marginLeft: '302px'}}>
                    <text>{props.name}</text>
                </div>
                <div className={styles.modalText} style={{marginLeft: '570px'}}>
                    <text>{props.mname}</text>
                </div>
                <div onClick={e => {
                    const rect = e.target.getBoundingClientRect();
                    {
                        setCoordsX(rect.x);
                        setCoordsY(rect.y + window.scrollY + 22);
                        setDropdownOn(!dropdownOn);
                    }
                }} className={styles.statusDropDown}>
                    <text>{getStatus(props.status)}</text>
                    {
                        dropdownOn &&
                        <Portal>
                            <StatusDrawer status={props.status} coordX={coordsX}
                                          coordY={coordsY}/>
                        </Portal>
                    }
                    <a className={styles.path}><img src={'/path.png'}/></a>
                </div>
            </div>
        </div>
    )
}
