import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {HashRouter, Route} from 'react-router-dom';
import {UserForm} from './components/register/UserForm';
import Menu from './components/routes';
import Footer from './Footer'
import Contact from './Contactus';
import Aboutus from './Aboutus';
import Unis from './components/unis';
import Courses from './Courses';



ReactDOM.render(
<HashRouter>
<div>
    <Menu />
    <Route path='/' exact component={App} />
    <Route path='/register' component={UserForm} />
    <Route path ='/courses' component={Courses} />
    <Route path='/contactus' component={Contact} />
    <Route path='/aboutus' component={Aboutus} />
    <Route path='/unis' component={Unis} />

    <Footer />
</div>
</HashRouter>
    , document.getElementById('root'));


