import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
//import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter,HashRouter} from 'react-router-dom';




ReactDOM.render(
<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));


