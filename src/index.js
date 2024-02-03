import React from 'react';
import ReactDOM from 'react-dom/client';
import { hydrate, render } from "react-dom";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import './scss/index.scss';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );



 
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<React.StrictMode>
   <BrowserRouter>
     <App />
   </BrowserRouter>
 </React.StrictMode>, rootElement);
} else {
  render(<React.StrictMode>
   <BrowserRouter>
     <App />
   </BrowserRouter>
 </React.StrictMode>, rootElement);
}