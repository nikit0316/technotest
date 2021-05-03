import React, {useState} from "react";
import styles from "./User.module.css";
import Portal from "../../Portal/Portal";
import StatusDrawer from "./StatusDrawer/StatusDrawer";
import UserModal from "./UserModal/UserModal";
import {getAvatar, getStatus, getTime, numFormat} from "./UserUtils";

function User(props) {
    let {name,fname,mname,balance,lastUpdatedAt,status,avatar} = props;
    const [coordsX, setCoordsX] = useState(null);
    const [coordsY, setCoordsY] = useState(null);
    const [dropdownOn, setDropdownOn] = useState(false);
    const [modalOn, setModalOn] = useState(false);

    function handleClick() {
        setModalOn(!modalOn);
    }

    return (
        <div className={styles.window}>
            <img className={styles.image} src={getAvatar(avatar)}/>
            <a onClick={(e) => {
                handleClick()
            }} className={styles.userName}>{fname} {name[0]}. {mname[0]}.</a>
            <a className={styles.balance}>Баланс: {numFormat(balance.toFixed(2))}</a>
            <a className={styles.time}>{getTime(lastUpdatedAt)}</a>
            <div onClick={e => {
                const rect = e.target.getBoundingClientRect();
                {
                    setCoordsX(rect.x);
                    setCoordsY(rect.y + window.scrollY);
                    setDropdownOn(!dropdownOn);
                }
            }} className={styles.statusDropDown}>{getStatus(status)}
                {
                    dropdownOn &&
                    <Portal>
                        <StatusDrawer status={status} coordX={coordsX}
                                      coordY={coordsY}/>
                    </Portal>
                }
                <a className={styles.path}><img src={'/path.png'}/></a>
            </div>
            {
                modalOn &&
                <Portal>
                    <UserModal handleClick={handleClick} name={name} fname={fname}
                               mname={mname} status={status}/>
                </Portal>
            }
        </div>
    )
}

export default User;
