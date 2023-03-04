import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/* 
Create the root node of the React DOM, 
associate it with a node (identified by id="root") in the actual DOM (in index.html),
and render the actual DOM (and update the React DOM at the same time?)
*/

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
