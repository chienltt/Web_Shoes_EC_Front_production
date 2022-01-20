import App from "../App";
import {Paths} from "./Paths";
import HomePage from "../app/homepage/HomePage";

const routes = [
    {
        component:App,
        routes:[
            {
                path: Paths.Homepage,
                exact:true,
                component:HomePage
            }
        ]
    }
]
export default routes