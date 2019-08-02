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
        this.getRemoteData();
        //this.getData();
    }
    getRemoteData(){
        axios.get("http://localhost:3000/friends").then((response)=>{
            console.log(response.data);
        this.setState({users: response.data});
        console.log(this.state.users);
    });
}
    successFuntion = function(response){
        console.log(response.data);
    }
    errorFunction = function(response){
        console.log(response.data);
    }
getData = function(){
    axios.get("https://jsonplaceholder.typicode.com/users").then(this.successFuntion,this.errorFunction);
}

    

    displayallusers = function(){
        return this.state.users.map((user)=>{
            return <UserDetail 
            key ={user.id}
            id={user.id}
            name ={user.name}
            username ={user.username}
            zipcode={user.address.zipcode}
            lat={user.address.geo.lat}
            lng={user.address.geo.lng}
            un ={user.username}></UserDetail>
        })
        
    }
    state = {  }
    render() { 
        return ( 
            <span>
            <table border ="1" >
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>username</th>
                            <th>zip</th>
                            <th>Lat</th>
                        </tr>
                    </thead>
                    <tbody>{this.displayallusers()}</tbody>
                    
                </table>
                </span>
         );
    }
}
 
export default ReamoteData;