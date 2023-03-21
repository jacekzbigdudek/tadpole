import "./app.css";

import {useState} from "react";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import Main from "../main/Main";
import Footer from "../footer/Footer";

/* 
Currently we're importing test data as modules from inside the project repository. 
This will be replaced with calls to a database running on a cloud virtual machine.
And they probably should be made inside the render definitions for App or Main.
*/
import applications from "../../data/applications";
import environments from "../../data/environments";
import testCases from "../../data/testCases";

const data = {
  "applications" : applications,
  "environments" : environments,
  "testCases": testCases
};

/* 
Some things to do in this component:
  Implement and invoke the remaining components:
    Header
      FlagOfCanada
      Breadcrumbs
      Settings
        Language
        Colorscheme
        Layout 
      Title
    Footer
      FollowUps
      CanadaLogo

Figure out how to layout your components. Which things to do using javascript.
*/

const App = () => {
  const [view, setView] = useState("applications");
  const navButtonClickHandler = str => (() => setView(str));

  return (
    <>
      <Header/>
      <Nav view={view} setView={str => (() => setView(str))}/>
      <div id="main">
        <Main json={data[view]}/>
      </div>
      <Footer/>
    </>
  );
};

export default App;

