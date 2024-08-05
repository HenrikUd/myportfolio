import 'bootstrap/dist/css/bootstrap.min.css';
import './Stars.css';
import SvgComponent from './Svg'



function Home() {
    return (
      
      <div className="container-fluid homeContainer">
         <SvgComponent className="star"/>
         <SvgComponent className="star2"/>
         <SvgComponent className="star3"/>
         <SvgComponent className="star4"/>
        
        
      <div className="d-flex container theBody align-items-center justify-content-center">
      
        <h1 className="homeTitle">
        
         <div className="d-flex justify-content-center animation display-5 homeTitle slide-in">Welcome!</div>
         
         <div className="d-flex align-items-start rows">
        <p className="homeText">My name is Henrik, I am a web developer based out of Tallinn, Estonia</p>
        </div>
        
        </h1>
        </div>
        
        
        
      </div>
    )
  }

export default Home