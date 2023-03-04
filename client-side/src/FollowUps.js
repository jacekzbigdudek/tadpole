/* JSX fragments can be declared as variables: */
const a1 = <a href="#">Documentation</a>;
const a2 = <a href="#">Licenses</a>;
const a3 = <a href="#">Contacts</a>;

const FollowUps = () => (
  <div>
    {a1}
    {a2}
    {a3}
  </div>
);

export default FollowUps;
