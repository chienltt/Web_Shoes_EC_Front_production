import App from "../App";
import {Paths} from "./Paths";
import HomePage from "../app/homepage/HomePage";
import DefaultPage from "../app/defaultpage/DefaultPage";

const routes = [
    {
        component:App,
        routes:[
            {
                path: Paths.DefaultPage,
                exact:false,
                component:DefaultPage,
                routes:[
                    {
                        path:Paths.HomePage,
                        exact:true,
                        component:HomePage
                    }
                ]
            }
        ]
    }
]
export default routes