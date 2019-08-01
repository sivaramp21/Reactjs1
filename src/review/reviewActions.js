import React from 'react';
import ReviewAuthor from './reviewauthor';
class ReviewActions extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            likes: parseInt(this.props.like),
            unlike: parseInt(this.props.unlike)
        }
        this.increaselike = this.increaselike.bind(this);
        this.decreaselike = this.decreaselike.bind(this);
    }
    increaselike = function(){
console.log("increase called");
this.setState({likes:this.state.likes + 1})
    }

    decreaselike = function(){
        console.log("decrease called");
        this.setState({unlike:this.state.unlike - 1})
            }
    
 
    render() { 
        return (  
            <div>
                <button onClick={this.increaselike}>+ {this.state.likes} +</button>
                &nbsp;
                <button onClick={this.decreaselike}>- {this.state.unlike} -</button>
                <ReviewAuthor user={this.props.un}></ReviewAuthor>
            </div>
        );
    }
}
 
export default ReviewActions;