import './Navbar.css';


const Navbar = ({ projectsRef, aboutRef, contactRef }: any) => {

    const handleClick = () => {
        projectsRef.current?.scrollIntoView({behavior: 'smooth'});
      };

      const handleClickAbout = () => {
        aboutRef.current?.scrollIntoView({behavior: 'smooth'});
      };

      const handleClickContact = () => {
        contactRef.current?.scrollIntoView({behavior: 'smooth'});
      };

      


  return (
    <nav className="navbar navbar-light navbar-expand bg-light fixed-top">
        <div className="container">
        <a href="/" className="navbar-brand">
        <i className="fas fa-blog"></i> &nbsp;
        Home
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>


        <div id="navbarCollapse" className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
            
            <li className="nav-item" onClick={handleClick}>
                <a ref={projectsRef} className="nav-link active">
                    PROJECTS
                </a>
            </li>
            <li className="nav-item" onClick={handleClickAbout}>
                <a ref={aboutRef} className="nav-link active">
                    ABOUT
                </a>
            </li>
            <li className="nav-item" onClick={handleClickContact}>
                <a ref={contactRef} className="nav-link active">
                    CONTACT
                </a>
            </li>
        </ul>
        </div>



    </div>
    </nav>
  )
};

export default Navbar