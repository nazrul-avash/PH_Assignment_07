import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Timeline from "./Timeline";
import Stats from "./Stats";
import FriendDetails from "./FriendDetails";
import ErrorPage from "./ErrorPage";
import CenterWindow from "./CenterWindow";
import { Activity } from "react";
import ActivityArea from "./ActivityArea";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<RootLayout></RootLayout>,
        children:[
            {
                index:true,
                element:<CenterWindow></CenterWindow>
            },
            {
                path:"/timeline",
                element:<Timeline></Timeline>,
                children:[{
                    index:true,
                    element:<ActivityArea></ActivityArea>
                }]
                
            },
            {
                path:"/stats",
                element:<Stats></Stats>
            },
            {
                path:"/friend/:id",
                element:<FriendDetails></FriendDetails>,
                loader: ({params}) => fetch("/friends.json")
                .then((res) => res.json())
                .then((data)=> data.find((expectedfriend)=>expectedfriend.id == params.id))
            }
        ],
        errorElement:<ErrorPage></ErrorPage>
    }
]);