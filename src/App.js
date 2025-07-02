import React from "react";
import "./App.scss";
import Main from "./pages/Main";
import EducationPage from "./pages/Education";
import BlogPage from "./pages/Blogs";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/Dashboard";
import ResearchPage from "./pages/Research";
import ProjectsPage from "./pages/Projects";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/education" component={EducationPage} />
                <Route path="/blogs" component={BlogPage} />
                <Route path="/dashboard" component={DashboardPage} />
                <Route path="/research" component={ResearchPage} />
                <Route path="/projects" component={ProjectsPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
