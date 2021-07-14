import React from "react"


const Card = ({ title, description, screenShot, url, deployment, deploymentUrl}) => {

    return (
        <div className = 'infoCard' style={{marginTop:25, border: '2px solid black', marginBottom: 10}}>
            <div className = 'cardContent'>
                <h3 className = 'cardTitle'>{title}</h3>
                <p className = 'cardDescription'>{description}</p>
                <img src={screenShot} className='screenShotImage'></img>
                <br></br>
                <a href={url} target='_blank' rel='undefined'>Check Out the Code!</a> 
                <br></br>
                {deployment ? <a href={deploymentUrl} target='_blank' rel='undefined'>Check Out the Deployment!</a> : <></>}           
            </div>
        </div>
    )
}



export default Card

