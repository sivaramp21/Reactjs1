import React from 'react';
class UserVote extends React.Component {
    state = {  }
constructor(props){
    super(props);
    this.state ={
        name:""
    }
    this.getName = this.getName.bind(this);
}
    getName = function(event){
event.persist()
        console.log("nMa input change");
        
        this.setState({name : event.target.value})
    }
    render() { 
        return ( 
            <div>
                Name:<input type="text" value ={this.state.name} onChange={this.getName}></input>
                <br></br>
                Vote:<input type="number"></input>
                <button>Vote</button>
            </div>
         );
    }
}
 
export default UserVote;