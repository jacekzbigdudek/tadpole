import "./header.css";

import FlagOfCanada from "../flagOfCanada/FlagOfCanada";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import Settings from "../settings/Settings";

const Header = () => (
  <div id="header">
    <FlagOfCanada />
    <Breadcrumbs />
    <h1 id="title">Test Automation Dashboard</h1>
    <Settings />
  </div>
);

export default Header;
