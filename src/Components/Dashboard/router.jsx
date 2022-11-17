import { Route, Routes } from "react-router-dom"
import React from "react"
import Default from "./DashboardComponents/DeafaultUi"
import Questions from "./DashboardComponents/Questions"
import Noflications from "./DashboardComponents/Noflications/Noflications"
import EditText from "./DashboardComponents/EditText"
import EditMedia from "./DashboardComponents/EditMedia"
import EditSection from "./DashboardComponents/EditSection"

export default function RouterApps(){
    const data =[
        {
            path:"/",
            element:<Default/>,
            exact:true
        },
        {
            path:"/questions",
            element:<Questions/>,
            exact:true
        },
        {
            path:"/massage",
            element:<Default/>,
            exact:true
        },
        {
            path:"/notifications",
            element:<Noflications/>,
            exact:true
        },
        {
            path:"/edit-text",
            element:<EditText/>,
            exact:true
        },
        {
            path:"/edit-media",
            element:<EditMedia/>,
            exact:true
        },
        {
            path:"/edit-section",
            element:<EditSection/>,
            exact:true
        },
    ]
    return( 
        <Routes> 
            {data.map(item=>(
            
                <Route 
                    key={item}
                    path={item.path} 
                    element={item.element} 
                    exact={item.exact}
                ></Route>
            
            ))}
        </Routes>
    )
}