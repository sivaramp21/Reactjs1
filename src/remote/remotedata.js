import React from 'react';
import axios from "axios";
import UserDetail from '../detail/userdetail';
class ReamoteData extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            users:[]
        }
    }
    componentWillMount(){
        this.RemoteData();
    }
    getRemoteData(){
        axios.get("https.ge").then((Response)=>{console.log(response.data)});
        this.setState({users:response.data});
        console.log(this.state.users);
    }

    displayallusers = function(){
        return this.state.users.map((user)=>{
            return <UserDetail name ={user.name}
            un ={user.username}></UserDetail>
        })
        
    }
    state = {  }
    render() { 
        return ( 
            <div>
                {this.displayallusers()}
            </div>
         );
    }
}
 
export default ReamoteData;