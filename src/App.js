import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Grid/Grid";
import { DashBoard } from "./Components/Dasboard/DashBoard";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={DashBoard}/>
                <Route  path="/layout" Component={Layout}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
