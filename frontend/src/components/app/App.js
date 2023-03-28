import "./app.css";
import axios from "axios";
import {useState, useEffect} from "react";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import Main from "../main/Main";
import Footer from "../footer/Footer";

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

Figure out how to layout your components. 
  What things to do using javascript and what using CSS.

Do we want to use axios still or should we look into the generic Fetch api instead?
*/

const App = () => {
  const [data, setData] = useState({});
  const [view, setView] = useState("applications");
  const f = vw => axios.get(window.location.origin.concat('/', vw)); 

  const getData = () => {
    const views = ["applications", "environments", "testCases"];
    const pendingDatasets = views.map(f);
    Promise.all(pendingDatasets)
      .then(datasets => {
          const data_ = {
            "applications": datasets[0].data,
            "environments": datasets[1].data,
            "testCases": datasets[2].data
          };
          setData(data_);
        }
      );
  };

  /* 
  Use an effects hook to register a callback to retrieve a resource over the network.
  By default, effects hooks are called every time the component (in whose definition 
  they are invoked) has been rendered. Recall, the callstack has to be empty for any
  asynchronous callbacks to be executed.
  */
  useEffect(() => {setTimeout(getData, 1000);}, [data, setData]);
  
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

