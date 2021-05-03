import styles from './StatusDrawer.module.css'

export default function StatusDrawer(props) {
    const {status, coordX, coordY} = props;

    const window = <div className={styles.statusWindow} style={{left: coordX.toString() + 'px', top: (coordY + 22).toString() + 'px'}}>
        <div className={styles.statusChosen} style={{color: status === 0 && '#3F3356'}}>Приостановлена</div>
        <div className={styles.statusChosen} style={{color: status === 1 && '#3F3356'}}>Подписка активна</div>
        <div className={styles.statusChosen} style={{color: status === 2 && '#3F3356'}}>Заблокирован</div>
    </div>

    return window
}
