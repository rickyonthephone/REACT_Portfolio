//Needed Logos
import HTML5Logo from "./images/html5logo.png"
import CSSLogo from "./images/CSSLogo.png"
import ExpressLogo from "./images/expressLogo.png"
import JSLogo from "./images/JSLogo.png"
import MongoDBLogo from "./images/MongoDBLogo.png"
import NodeJSLogo from "./images/NodeJSLogo.png"
import ReactLogo from "./images/ReactLogo.png"
import GraphQLLogo from "./images/GraphQLLogo.png"
import GitHubLogo from "./images/githubLogo.png"
import LinkedInLogo from "./images/linkedInLogo.png"
import MySQLLogo from "./images/mysqlLogo.png"
import codepenLogo from "./images/codepenLogo.png"
//ScreenShots
import PasswordGen from "./images/PasswordGen.png"
import WeatherApp from "./images/WeatherApp.png"
import WorkDayScheduler from "./images/WorkDayScheduler.png"
import HomeKitchenPro from "./images/HomeKitchenPro.png"
import NoteTaker from "./images/NoteTaker.png"
import FitnessTracker from "./images/FitnessTracker.png"

export default {
    name: "Richard Crippen",
    headerbackground: "I was born and raised in Atlanta and have worked in the financial sevices industry for the last 20 years. I decided to learn about web development as an opportunity to do something different with my career.",
    contactEmail: 'richard.crippen@gmail.com',

    projects: [
        {
            title: 'JavaScript Password Generator',
            description: 'Create a password generator that will randomly create a password between 8 and 25 characters for you and can include both upper and lower case letters, numbers, and special characters. The app uses JavaScript, HTML, and CSS to accomplish the goals',
            screenShot: PasswordGen,
            url: 'https://github.com/rickyonthephone/JavaScript_Password_Generator/tree/master/assets',
            deployment:false,
            deploymentUrl:''
        },
        {
            title: 'Weather Dashboard',
            description: 'Create a weather dashboard using a weather API and has the ability to search weather by city name. The app provides current weather data as well as a 5 day forecast for the selected city. The app highlights usage of a third party API, JavaScript/HTML/CSS, and uses local storage to save search data.',
            screenShot: WeatherApp,
            url: 'https://github.com/rickyonthephone/Weather_Dashboard',
            deployment:false,
            deploymentUrl:''
        },
        {
            title:'Workday Scheduler',
            description: 'Create a simple calendar that allows users to save events for each hour of the work day.',
            screenShot: WorkDayScheduler,
            url: 'https://github.com/rickyonthephone/Work_Day_Scheduler',
            deployment:false,
            deploymentUrl:''
        },
        {
            title: 'Home Kitchen Pro Recipe App',
            description: 'A food and beverage app that pulls recipes from the Spoonacular and thecocktaildb.com APIs that allows users to search for recipes based on type or cuisine as well as get a cocktail recipe with each search.',
            screenShot: HomeKitchenPro,
            url:'https://github.com/rickyonthephone/Project1Repo',
            deployment:false,
            deploymentUrl:''
        },
        {
            title:'Note Taker',
            description: 'This app was created to write and save personal notes. The app uses Express.js on the back end and this was my first app deployment using Heroku.',
            screenShot: NoteTaker,
            url:'https://github.com/rickyonthephone/NoteTaker123',
            deployment: true,
            deploymentUrl:'https://rcnotetaker2021.herokuapp.com/'
        },
        {
            title:'Fitness Tracker',
            description:'App tracks workouts and allows you to add data to an existing work. Workout data is also graphed out for the last 7 days.',
            screenShot: FitnessTracker,
            url: 'https://github.com/rickyonthephone/Fitness_Tracking_App',
            deployement: true, 
            deploymentUrl: 'https://trackmyfitnesstoday.herokuapp.com/?id=60d2b45fd1c378ad28718b31'
        }
    ],

    skills: [
        {
            image: HTML5Logo,
            description: 'HTML5'
        },
        {
            image: CSSLogo,
            description: 'CSS'
        },
        {
            image: JSLogo,
            description: 'JavaScript'
        },
        {
            image: NodeJSLogo,
            description: 'NodeJS'
        },
        {
            image: MongoDBLogo,
            description: 'MongoDB'
        },
        {
            image: MySQLLogo,
            description: 'MySQL'
        },
        {
            image: ExpressLogo,
            description: 'ExpressJS'
        },
        {
            image: ReactLogo,
            description: 'React'
        },
        {
            image: GraphQLLogo,
            description: 'GraphQL'
        }
    ],

    social: [
        {
            ghimage: GitHubLogo,
            url: 'https://github.com/rickyonthephone'
        },
        {
            liimage: LinkedInLogo,
            url: 'https://www.linkedin.com/in/richard-crippen-2b134a2/'
        },
        {
            cpimage: codepenLogo,
            url: 'https://codepen.io/rickyonthephone'
        }
    ]
}