import CosmeticImg from './images/cosmeticProje.png';
import WeatherImg from './images/weatherProject.png'
import { forwardRef } from "react";




const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  
  const openInNewTab = (url: string | URL | undefined)=> {
    window.open(url, '_blank', 'noopener,noreferrer');
  };


  return (
    <div ref={ref}>
    <div className="container theProjects">
        <div className="d-flex justify-content-center">
        <h2 className="display-5 projectsTitle d-flex align-items-end">My projects</h2>
        </div>
        <div className="d-flex justify-content-center">
    <div className="row">
    <div className="col">
<div className="d-flex mx-auto card weatherCard" onClick={() => openInNewTab('https://weathergrab.vercel.app/')}>
  <img src={WeatherImg} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="d-flex card-title justify-content-center">Weather API project</h5>
    <p className="card-text">A weather site application, using a weather API. Made with React, Typescript and Bootstrap.</p>
    
  </div>
</div>
</div>


        <div className="col">
        <div className="d-flex mx-auto card cosmeticCard" onClick={() => openInNewTab('https://cosmetic-site.vercel.app/')}>
  <img src={CosmeticImg} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="d-flex card-title justify-content-center">Cosmetician site</h5>
    <p className="card-text">A front-end practice project, building a site for a cosmetician. Whilst making this project, I learned a lot of Bootstrap
    skills.</p>
    
  </div>
</div>
</div>

</div>
</div>
</div>
    </div>
    
  )
});

export default Projects