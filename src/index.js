import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from './firstcomponent';
import ReviewComponent from './review/review';
import Lifecycle from './lifecycle/lifecycle';
import ReamoteData from './remote/remotedata';
import UserVote from './forms/vote';


var location = document.getElementById("container");
var lifelocation = document.getElementById("container1");
ReactDOM.render(
<span>
    <FirstComponent mytitle="Welcome">Chennai</FirstComponent>
    <FirstComponent mytitle="hii">blore</FirstComponent>
    <ReviewComponent titlecolor="red" like="5" unlike="10" username="Ram"></ReviewComponent>
    <ReviewComponent titlecolor="green" like="5" unlike="10" username="Siva" title="note10">Gadget1</ReviewComponent>
    <ReviewComponent titlecolor="blue" like="5" unlike="10" username="Raheem" title="samsung">Gadget2</ReviewComponent>
    <ReviewComponent titlecolor="grey" like="5" unlike="10" username="Ra" title="MI">Gadget3</ReviewComponent>
</span>
,location);

alert("2nd rendor start");

ReactDOM.render(<Lifecycle></Lifecycle>,lifelocation);

ReactDOM.render(<span><ReamoteData></ReamoteData><UserVote></UserVote></span>,document.getElementById("container2"));




