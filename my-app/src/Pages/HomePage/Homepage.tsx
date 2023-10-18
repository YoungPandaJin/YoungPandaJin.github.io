import "./Homepage.scss"
import Intro from "./Component/Intro/Intro";
import Bio from "./Component/Bio/Bio"
import Spacer from "./Component/Spacer/Spacer";
import layer1 from "../../Assets/layer1.svg"

export default function HomePage(){

    return (
        <>
            <div className="homepage-container">
                <Intro/>
                <Spacer pic={layer1} type={"intro-anchor"} />

                <Bio/>
            </div>
        </>
    )

}