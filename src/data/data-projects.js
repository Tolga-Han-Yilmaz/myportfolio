import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as External } from "../assets/external.svg";
const projects = [
    {
        id:100,
        img:"./images/project-1.png",
        title:"Social Media",
        description:"I aimed to make a blog page where everyone can share and see the posts, After logging in, the user can share as he wishes. You can delete and update your posts,You can also access current news on the right side of my web page.",
        repoLink:"https://github.com/Tolga-Han-Yilmaz/social-media",
        repoSvg:<Github/>,
        appLink:"https://thy-blog.vercel.app/",
        appSvg:<External/>,
        tools:[
            {
                tool:"Redux-Toolkit"
            },
            {
                tool:"Firebase"
            },
            {
                tool:"Material UI"
            }
        ]

    },
    {
        id:101,
        img:"./images/project-1.png",
        title:"E-Commerce",
        description:"I developed the application with ReactJS, I pulled the data from api with fetch,I used SASS for design, My design is a responsive design, We can think of it as a simulated version of the shopping site.",
        repoLink:"https://github.com/Tolga-Han-Yilmaz/e-commerce",
        repoSvg:<Github/>,
        appLink:"https://e-commerce-ivory-six.vercel.app/",
        appSvg:<External/>,
        tools:[
            {
                tool:"Fetch"
            },
            {
                tool:"SASS"
            }
        ]

    },
    {
        id:102,
        img:"./images/project-1.png",
        title:"Movie App",
        description:"I developed the application with ReactJS, I pulled the data from api with fetch,I used SASS for design, My design is a responsive design, We can think of it as a simulated version of the shopping site.",
        repoLink:"https://github.com/Tolga-Han-Yilmaz/movie_app",
        repoSvg:<Github/>,
        appLink:"https://movies-app2022.netlify.app/",
        appSvg:<External/>,
        tools:[
            {
                tool:"Firebase"
            },
            {
                tool:"React Toastify"
            }
        ]

    }
];
export default projects;