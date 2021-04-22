import React from "react";
import styles from "./User.module.css";
import Portal from "../../Portal/Portal";
import StatusDrawer from "./StatusDrawer/StatusDrawer";
import UserModal from "./UserModal/UserModal";

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            coordsX: null,
            coordsY: null,
            dropdownOn: false,
            modalOn: false,
            avatar: props.avatar,
            name: props.name,
            fname: props.fname,
            mname: props.mname,
            status: props.status,
            lastUpdatedAt: props.lastUpdatedAt,
            balance: props.balance
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({modalOn: !this.state.modalOn});
    }

    render() {
        return (
            <div className={styles.window}>
                <img className={styles.image} src={getAvatar(this.state.avatar)}/>
                <a onClick={(e) => {this.handleClick()}} className={styles.userName}>{this.state.fname} {this.state.name[0]}. {this.state.mname[0]}.</a>
                <a className={styles.balance}>Баланс: {numFormat(this.state.balance.toFixed(2))}</a>
                <a className={styles.time}>{getTime(this.state.lastUpdatedAt)}</a>
                <div onClick={e => {
                    const rect = e.target.getBoundingClientRect();
                    this.setState({
                        coordsX: rect.x,
                        coordsY: rect.y + window.scrollY,
                        dropdownOn: !this.state.dropdownOn
                    })
                }} className={styles.statusDropDown}>{getStatus(this.state.status)}
                {
                    this.state.dropdownOn &&
                    <Portal>
                        <StatusDrawer status={this.state.status} coordX={this.state.coordsX} coordY={this.state.coordsY}/>
                    </Portal>
                }
                    <a className={styles.path}><img src={'/path.png'}/></a>
                </div>
                {
                    this.state.modalOn &&
                    <Portal>
                        <UserModal handleClick={this.handleClick} name={this.state.name} fname={this.state.fname} mname={this.state.mname} status={this.state.status}/>
                    </Portal>
                }
            </div>
        )
    }
}

function getTime(time) {
    let currentTime = new Date();
    let userTime = Date.parse(time);
    let result = null;
    userTime = new Date(userTime);
    let timeDifferenceSeconds = Math.floor((currentTime-userTime) / (1000));
    if (timeDifferenceSeconds < 60){
        result = 'Последнее изменение: ' + timeDifferenceSeconds + 'секунд назад';
    }
    else if (timeDifferenceSeconds < 3600)//Не более 3-х дней
    {
        result = 'Последнее изменение: ' + timeDifferenceSeconds/(60) + 'минут назад';
    }
    else if (timeDifferenceSeconds < 259200)//Не более 3-х дней
    {
        result = 'Последнее изменение: ' + timeDifferenceSeconds/(60 * 60 * 24) + 'дней назад';
    }
    else result = 'Последнее изменение: ' + userTime.getDate() +'.' + (userTime.getMonth()+1) + '.' + userTime.getFullYear() + ' ' + userTime.getHours() + ':' + userTime.getMinutes();
    return result;
}

function getAvatar(src) {
    let array = src.split('/');
    let result = null;
    if (array[1] === 'public'){
        return '/'+array[2];
    }
    else return src;
}

export function getStatus(statusCode) {
    let result=null;
    if (statusCode===0)
        result='Приостановлена';
    else if (statusCode===1)
        result='Подписка активна';
    else if (statusCode===2)
        result='Заблокирован';
    return result;
}

function numFormat(balance){
    let digit = balance.split('.');
    let lastDigits = digit[1];
    digit = digit[0].split('').reverse().join('')
        .match(/\d{0,3}/g).join(' ')
        .split('').reverse().join('').trim();
    return digit+'.'+lastDigits;
}

export default User;