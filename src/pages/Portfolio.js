import data from "../allData"
import Card from "../components/Card/Card"

function Portfolio () {
    return (
        <div className='section' id='portfolio'>
            <div className='container'>
                <div className='portfolioWrap'>
                    <h1>My Portfolio</h1>

                    <div className='grid'>
                        {data.projects.map((project, index) => (
                            <Card
                                key={index}
                                title={project.title}
                                description={project.description}
                                screenShot={project.screenShot}
                                url={project.url}
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