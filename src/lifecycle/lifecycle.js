import React from 'react';
class Lifecycle extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        dummy : 0}
        this.changedummy = this.changedummy.bind(this);
    }

    componentWillMount(){
        console.log("component will mount on page");
        alert(2);

    }

    componentDidMount(){
        console.log("component is mounted on page");

    }

    componentWillUpdate(){
        console.log("component will update on page");

    }

    componentDidUpdate(){
        console.log("component is mounted on page");

    }

    componentWillUnmount(){
        console.log("component will mount on page");

    }
    changedummy = function(){
        this.setState({dummy: this.state.dummy + 1});
    }

    state = {  }
    render() { 
        return (  
            <div>
                <h1>exploring lifecycle</h1>
                <button onClick={this.changeDummy}>{this.state.dummy}</button>
                </div>
        );
    }
}
 
export default Lifecycle;