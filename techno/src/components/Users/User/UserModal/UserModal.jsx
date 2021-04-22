import styles from './UserModal.module.css'
import * as React from "react";
import Portal from "../../../Portal/Portal";
import StatusDrawer from "../StatusDrawer/StatusDrawer";
import {getStatus} from "../User";

export default class UserModal extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.props.handleClick;
        this.state = {
            name: props.name,
            fname: props.fname,
            mname: props.mname,
            status: props.status,
            isOn: false,
            coordsX: null,
            coordsY: null
        }
    }
    render() {
        return (
            <div className={styles.modal}>
        <div className={styles.modalWindow}>
            <div className={styles.modalHeader}>
                <div className={styles.modalName}>{this.state.fname + ' ' + this.state.name}</div>
                <div className={styles.removeDiv} onClick={(e) => {this.handleClick()}}><img src={'remove.png'}/></div>
                <div className={styles.line}/>
            </div>
            <div className={styles.button}><text>Сохранить</text></div>
            <div className={styles.modalText}><text>{this.state.fname}</text></div>
            <div className={styles.modalText} style={{marginLeft:'302px'}}><text>{this.state.name}</text></div>
            <div className={styles.modalText} style={{marginLeft:'570px'}}><text>{this.state.mname}</text></div>
            <div onClick={e => {
                const rect = e.target.getBoundingClientRect();
                this.setState({
                    coordsX: rect.x,
                    coordsY: rect.y + window.scrollY + 22,
                    dropdownOn: !this.state.dropdownOn
                })
            }} className={styles.statusDropDown}><text>{getStatus(this.state.status)}</text>
                {
                    this.state.dropdownOn &&
                    <Portal>
                        <StatusDrawer status={this.state.status} coordX={this.state.coordsX} coordY={this.state.coordsY}/>
                    </Portal>
                }
                <a className={styles.path}><img src={'/path.png'}/></a>
            </div>
        </div>
            </div>
        )
    }
}