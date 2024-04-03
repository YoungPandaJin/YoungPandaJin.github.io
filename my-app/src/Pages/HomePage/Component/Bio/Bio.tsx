import "./Bio.scss"
import professionalPFP from '../../../../Assets/professionalPFP.JPG';

export default function Bio(){
    
    return (
        <div className="Container">
            <div className="Bio">
                <div className="Title">
                    <h1>About Me</h1>
                </div>
                <div className="PicTextContainer">
                    {/* <div className="PicContainer">
                        <img className={'pic'} src={professionalPFP} alt="PandaJin's pfp" />
                    </div> */}
                    <div className="TextContainer">
                        <h2>Hi, I'm Jinyoung Choi.</h2>
                        <p>
                            I am known as PandaJin. <br/>
                            Senior Computer Science Major in Rose-Hulman Institute of Technology.
                        <br/>
                        </p>
                        <h2>Interests</h2>
                        <p>
                            I like doing a variety of activities that is fun to me. <br/>
                            I like going outside, playing games, watching shows and more.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}