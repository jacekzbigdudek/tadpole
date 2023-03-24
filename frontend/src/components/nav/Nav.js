import "./nav.css";

/* Need to pass event handlers as props that use the state hook to set view. */

const Nav = ({view, setView}) => (
  <div id="nav">
    <button className="navItem" id="navApplications" type="button" onClick={setView("applications")}>Applications</button>
    <button className="navItem" id="navEnvironments" type="button" onClick={setView("environments")}>Environments</button>
    <button className="navItem" id="navTestSuites" type="button">Test Suites</button>
    <button className="navItem" id="navTestCases" type="button" onClick={setView("testCases")}>Test Cases</button>
    <button className="navItem" id="navTestRuns" type="button">Test Runs</button>
  </div>
);

export default Nav;
