import "./Homepage.scss"
import Intro from "./Component/Intro/Intro";
import Bio from "./Component/Bio/Bio"
import Skills from "./Component/Skills/Skills";
import Spacer from "./Component/Spacer/Spacer";
// import layer1 from "../../Assets/layer1.svg"

export default function HomePage(){
    return (
        <>
            <div className="homepage-container">
                <Intro/>
                <Spacer color={'white'} type={'noMargin'}/>

                <Bio/>
                <Spacer color={'white'} type={''}/>

                <Skills/>
                {/* <Spacer pic={layer1} type={""} /> */}
            </div>
        </>
    )

}