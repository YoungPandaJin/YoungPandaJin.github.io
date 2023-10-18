
import "./Bio.scss"
import professionalPFP from '../../../../Assets/professionalPFP.JPG';

export default function Bio(){
    
    return (
        <>
            <div className="Container">
                <div className="Bio">
                    <div className="Title">
                        <h1>About Me</h1>
                    </div>
                    <div className="PicTextContainer">
                        <div className="PicContainer">
                            <img className={'pic'} src={professionalPFP} alt="PandaJin's pfp" />
                        </div>
                        <div className="Text">
                            <p>
                                Hi my name is Jinyoung Choi.<br/>
                                I am a Senior CS Major of Rose-Hulman Institute of Technology<br/>
                                I like coding new things and experimenting with new coding languages<br/>
                            </p>
                            <p>
                                When I'm not busy I tend to do whatever intrest me such as <br/>
                                Coding a game to try and improve my coding and game design skills <br/>
                                Playing RDR2 or watching anime or even just hanging out with my friends <br/>                        </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}