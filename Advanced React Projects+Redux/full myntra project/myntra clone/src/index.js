import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homefront from './routes/Homefront';
import Bag from './routes/Bag';
import { Provider } from 'react-redux';
import myntrastore from './store/mainstore';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router=createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {path:"/",element:<Homefront/>},
        {path:"/bag",element:<Bag/>},
    ],
  },
]);
root.render(
  <React.StrictMode>
  <Provider store={myntrastore}>
  <RouterProvider router={router}></RouterProvider>
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
