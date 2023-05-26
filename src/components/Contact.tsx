import linkedinIcon from './images/LinkedIn_icon.svg';
import githubIcon from './images/iconmonstr-github-1.svg';
import gmailIcon from './images/Logo_Gmail.svg'
import { forwardRef } from "react";






const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  const openInNewTab = (url: string | URL | undefined)=> {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div ref={ref}>
    <div className="container theContact">
        <div className="d-flex align-items-end justify-content-center contactHeader">
        <h2 className="display-6">Contact me</h2>
        </div>
        <div className="d-flex justify-content-center align-items-start contactParagraph my-4">
        
        <p>
            If you are interested in hiring me or if you have any questions, feel free to contact me!</p>
            </div>
            <div className="d-flex justify-content-center align-items-end techRow">
        <div className="row contactRow my-5">
            <img src={linkedinIcon} className="contactIcon" alt="LinkedIn" onClick={() => openInNewTab('https://www.linkedin.com/in/henrik-u-591720267/')} />
            <img src={githubIcon} className="contactIcon" alt="Github" onClick={() => openInNewTab('https://github.com/HenrikUd')}/>
            <img src={gmailIcon} className="contactIcon" alt="Gmail" onClick={() => openInNewTab('mailto:henrikudam@gmail.com')}/>
            </div>
        </div>
        
        </div>
        </div>
  )
})

export default Contact