import React from 'react';
import {Switch,Route} from "react-router-dom";
import { switchCase, switchStatement } from '@babel/types';
import Home from '../page/home';
import About from '../page/about';
import Contact from '../page/contact';
class Content extends React.Component {
    state = {  }
    render() { 
        return (  
            
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/contact" component={Contact}></Route>
                </Switch>
            
        );
    }
}
 
export default Content;