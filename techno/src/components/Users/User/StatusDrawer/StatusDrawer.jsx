import styles from './StatusDrawer.module.css'

export default function StatusDrawer(props) {
    /*const statusCode = props.status;
    const styleBlock = {
        display: 'block',
        position: 'absolute',
        left: props.coordX.toString() + 'px',
        top: (props.coordY + 22).toString() + 'px',
        width: '193px',
        height: '124px',
        background: '#FFFFFF',
        boxShadow: '0px 7px 64px rgba(0, 0, 0, 0.07)',
        borderRadius: '6px',
        padding: '12px 16px',
        zIndex: 9999
    }*/

    const {status, coordX, coordY} = props;

    const window = <div className={styles.statusWindow} style={{left: coordX.toString() + 'px', top: (coordY + 22).toString() + 'px'}}>
        <div className={styles.statusChosen} style={{color: status === 0 && '#3F3356'}}>Приостановлена</div>
        <div className={styles.statusChosen} style={{color: status === 1 && '#3F3356'}}>Подписка активна</div>
        <div className={styles.statusChosen} style={{color: status === 2 && '#3F3356'}}>Заблокирован</div>
    </div>

    return window
}
