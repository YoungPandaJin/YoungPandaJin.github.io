import "./Spacer.scss"
export interface ISpacerProps {
    color: string;
    type: string;
}

export default function Spacer(props: ISpacerProps){
    const styles = {
        spacer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '75%',
            height: '5px',
            minWidth: '150px',
            backgroundColor: props.color,
            margin: '0 auto',
            marginBottom: props.type === 'noMargin' ? '0' : '10vh',
        },
        button: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '75%',
            height: '5px',
            minWidth: '150px',
            backgroundColor: props.color,
            margin: '0 auto',
            marginBottom: '5vh',
        },
        endButton: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '75%',
            height: '5px',
            minWidth: '150px',
            backgroundColor: props.color,
            margin: '5vh auto 10vh auto',
        },
    };
      
    return (
        <>
            {props.type === 'noMargin' ? <div style={styles.spacer}/> : null}
            {props.type === 'button' ? <div style={styles.button}/> : null}
            {props.type === 'endButton' ? <div style={styles.endButton}/> : null}
        </>
    )
}