import React from 'react';
import ReactDOM from 'react-dom/client';
import Setvalueform from './js/menu/App';
import reportWebVitals from './reportWebVitals';
import Body from "./js/body/body";
import Footer from './js/footer/footer';
const root = ReactDOM.createRoot(document.getElementById('menu'));
root.render(
  <React.StrictMode>
    <Setvalueform />
  </React.StrictMode>
);

const body = ReactDOM.createRoot(document.getElementById('content'));

body.render(<Body/>);


const footer = ReactDOM.createRoot(document.getElementById("footer"));

footer.render(<Footer/>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
