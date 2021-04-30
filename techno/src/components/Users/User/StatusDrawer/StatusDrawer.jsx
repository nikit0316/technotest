import styles from './StatusDrawer.module.css'

export default function StatusDrawer(props) {
    const statusCode = props.status;
    console.log(props);
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
    }

    const window = (
        <div style={styleBlock}>
            <div className={styles.statusChosen} style={{color: statusCode === 0 && '#3F3356'}}>Приостановлена</div>
            <div className={styles.statusChosen} style={{color: statusCode === 1 && '#3F3356'}}>Подписка активна</div>
            <div className={styles.statusChosen} style={{color: statusCode === 2 && '#3F3356'}}>Заблокирован</div>
        </div>
    )

    return (
        window
    )
}
