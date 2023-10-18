import "./Spacer.scss"
export interface ISpacerProps {
    pic: string;
    type: string;
}


export default function Spacer(props: ISpacerProps){
    
    return (
        <>
            <div className={`spacer ${props.type}`}>
                <img src={props.pic} alt="" />
            </div>
        </>

    )
}