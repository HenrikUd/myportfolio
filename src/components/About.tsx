import cssIcon from './images/css333.svg'
import jsIcon from './images/Unofficial_JavaScript_logo_2.svg'
import reactIcon from './images/React-icon.svg'
import bootstrapIcon from './images/bootstrap-5-1.svg'
import tsIcon from './images/ts-logo-512.svg'
import mongoIcon from './images/mongodb-icon-2.svg'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { forwardRef } from "react";






const About = forwardRef<HTMLDivElement>((props, ref) => {

  return (
    <>
    <div ref={ref}>
    <div className="container-fluid aboutBg">
    <div className="container theAbout">
        <div className="d-flex justify-content-center">
        <h2 className="d-flex align-items-end display-6 aboutTitle my-1">About me</h2>
        </div>
        <p className="aboutText">Web development is my hobby that I am very passionate about. I have loved computers ever since I was a child, and now when I started to learn programming
        it really captivated me. I enjoy putting things together, and solving all of the problems that occur on the way there. Outside of coding, I'm 
        interested in keeping fit, sports (football the most!), travelling and films.</p>
        
        
        
        <div className="d-flex align-items-end row">
         
        <h2 className="d-flex justify-content-center align-items-end myTitleTech display-6">Technologies that I use</h2>
        
        
        <AnimationOnScroll animateIn="animate__bounceIn">

        <div className="row mx-5 my-3 techRow">
          <div className="col-6  iconProp d-flex justify-content-center">
            
            <div className="card aboutCard text-white text-center bg-dark">
            
        <img src={mongoIcon} className="techIcon my-1" alt="mongoDB" />
        
        <p className="cardText my-1">MongoDB</p>
        
        </div>
        </div>
        <div className="col-6   iconProp d-flex justify-content-center">
        <div className="card aboutCard text-white text-center bg-dark">
        <img src={cssIcon} className="techIcon my-1" alt="css" />
        <p className="cardText my-1">CSS</p>

        </div>
        </div>
        </div>
        <div className="row my-3 mx-5 techRow">
        <div className="col-6  iconProp d-flex justify-content-center">
        <div className="card aboutCard text-white text-center bg-dark">
        <img src={jsIcon} className="techIcon my-1" alt="javascript" />
        <p className="cardText my-1">JavaScript</p>
        </div>
        </div>
        <div className="col-6  iconProp d-flex justify-content-center">
        <div className="card aboutCard text-white text-center bg-dark">
        <img src={tsIcon} className="techIcon my-1" alt="typescript" />
        <p className="cardText my-1">TypeScript</p>
        </div>
        </div>
        </div>
        <div className="row my-3 mx-5 techRow">
        <div className="col-6   iconProp d-flex justify-content-center">
        <div className="card aboutCard text-white text-center bg-dark">
        <img src={reactIcon} className="techIcon my-1" alt="react" />
        <p className="cardText my-1">React</p>
        </div>
        </div>
        <div className="col-6   iconProp d-flex justify-content-center">
        <div className="card aboutCard text-white text-center bg-dark">
        <img src={bootstrapIcon} className="techIcon my-1" alt="bootstrap" />
        <p className="cardText my-1">Bootstrap</p>
        </div>
        </div>
        </div>
        </AnimationOnScroll>
        </div>
        
        
        </div>
        </div>
        </div>
        </>
    
  )
})

export default About