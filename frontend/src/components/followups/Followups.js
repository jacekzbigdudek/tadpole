/* JSX fragments can be declared as variables: */
const a1 = <a className="followup" href="#">Documentation</a>;
const a2 = <a className="followup" href="#">Licenses</a>;
const a3 = <a className="followup" href="#">Contacts</a>;

const Followups = () => (
  <div id="followups">
    {a1}
    {a2}
    {a3}
  </div>
);

export default Followups;
