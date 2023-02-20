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

    }
];
export default projects;