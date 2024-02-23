import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement:<>error</>,
    children:[
      {index:true,element:<h1>home</h1>}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);


