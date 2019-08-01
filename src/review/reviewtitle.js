import React from 'react';
class ReviewTitle extends React.Component {
    state = {  }
    render() { 
        let titleStyle ={
            color : (this.props.titlecolor),
            borderBottom :"1px solid purple"
        }
        return (  
            
                
                <p style={titleStyle}>ReviewTitle</p>

           
        );
    }
}
 
export default ReviewTitle;