import "./FooterStyle.css"
import githubLogo from "../../images/githubLogo.png"
import linkedInLogo from "../../images/linkedInLogo.png"
import codepenLogo from "../../images/codepenLogo.png"

function Footer() {
    return (
        <div className='footerWrap'>
            <div className='section' id='github'>
                <a href='https://github.com/rickyonthephone'><img src= {githubLogo} className='image-responsive' id='githubLogo' onClick='https://github.com/rickyonthephone' /></a>
            </div>
            <div className='section' id='linkedin'>
                <a href='https://www.linkedin.com/in/richard-crippen-2b134a2/'><img src= {linkedInLogo} className='image-responsive' id='githubLogo' onClick='https://www.linkedin.com/in/richard-crippen-2b134a2/' /></a>
            </div>
            <div className='section' id='codepen'>
                <a href='https://codepen.io/rickyonthephone'><img src= {codepenLogo} className='image-responsive' id='githubLogo' onClick='https://codepen.io/rickyonthephone' /></a>
            </div>
        </div>
    )
}

export default Footer;