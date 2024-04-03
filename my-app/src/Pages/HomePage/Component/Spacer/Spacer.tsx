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
    };
      
    return (
            <div style={styles.spacer}/>
    )
}