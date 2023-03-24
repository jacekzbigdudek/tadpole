import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";

/* 
Create the root node of the React DOM, 
associate it with a node in the public/index.html file, 
where it's identified by id="root",
render the actual DOM (and update the React DOM at the same time?)
*/

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
