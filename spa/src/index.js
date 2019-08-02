import React from 'react';
import ReactDOM from 'react-dom';
import SPAContainer from './spacontainer/spacontainer';
import {HashRouter} from "react-router-dom";


var spalocation = document.getElementById("spa");
ReactDOM.render(<HashRouter><SPAContainer></SPAContainer></HashRouter>,spalocation);