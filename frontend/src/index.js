import React from 'react';
import { ReactDOM } from 'react-dom';
import App from './App';
import{createRoot} from "react-dom/client.js";

import AuthProvider from './Context/AuthContext';

//old 
// ReactDOM.render(<App/>,document.getElementById('root'));


//new
createRoot(document.getElementById('app')).render(<AuthProvider><App/></AuthProvider>);
