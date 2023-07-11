import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Grid/Grid";
import { DashBoard } from "./Components/Dasboard/DashBoard";
import { ButtonGrouping } from "./Components/ButtonGrouping/ButtonGrouping";
import { Checkdemo } from "./Components/CheckBox/Checkbox";
import { Text } from "./Components/TextField/TextField";
import { badge } from "./Components/Badge/Badge";
import { Avatar, avatar } from "./Components/Avatar/Avatar";
import { TableList } from "./Components/Tabel/Tabel";
import { listitems } from "./Components/List/List";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={DashBoard}/>
                <Route  path="/layout" Component={Layout}/>
                <Route path="/grouping" Component={ButtonGrouping}/>
                <Route path="/checkbox" Component={Checkdemo}/>
                <Route path="/Text" Component={Text}/>
                <Route path="/badge" Component={badge}/>
                <Route path="/avatar" Component={avatar}/>
                <Route path="/TableList" Component={TableList}/>
                <Route path="/list" Component={listitems}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
