import "./main.css";

/*
Things to correct here still:
  A leaf node that is an empty array or object will cause problems I think.
  Not sure why a semi-colon is being rendered at the end of each description list.
  Would like to implement background boxes with rounded corners using inline styles.
  Start implementing interactive controls for your test objects.   
  Implement collapsibility of nodes like in a standard tree view.
*/

const Main = ({json}) => {
  if (Array.isArray(json)) {
    return (
      <ol className="JSONArray">
        {json.map((item, index) => (
          <li key={item.uuid ? item.uuid : index}>
            <Main json={item} />
          </li>
        ))}
      </ol>
    );
  }
  else if (typeof json === "object") {
    let properties = Object.entries(json);
    return (
      <dl className="JSONobject"> 
        {properties.map((item, index) => {
          const key = item.uuid ? item.uuid : index; 
          return (
            <div key={key}> 
              <dt>
                {key}
              </dt>
              <dd>
                <Main json={item} />
              </dd>
            </div>
          );
        })};
      </dl>
    );
  }
  else if (typeof json === "number") {
    return (
      <sp className="JSONnumber">
        {json}
      </sp>
    );
  }
  else if (typeof json === "string") {
    return (
     <sp className="JSONstring">
       {json}
     </sp>
    );
  }
}

export default Main;

