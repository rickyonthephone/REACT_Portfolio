import { render } from "@testing-library/react"
import data from "../allData"
import Card from "../components/Card/Card"
import "./styles.css"

function Portfolio () {
    return (
        <div className='pageContent' id='portfolio'>
            <div className='container'>
                <div className='portfolioWrap'>
                    <h1>My Portfolio</h1>

                    <div className='grid cards'>

                        {data.projects.map((project, index) => (
                            <Card 
                                key={index}
                                title={project.title}
                                description={project.description}
                                screenShot={project.screenShot}
                                url={project.url}
                                deployment={project.deployment}
                                deploymentUrl={project.deploymentUrl}
                            ></Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio