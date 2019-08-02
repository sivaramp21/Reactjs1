import React from 'react';
import ReviewTitle from './reviewtitle';
import ReviewDescription from './reviewdescription';
import ReviewActions from './reviewActions';
class ReviewComponent extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
                <h4>Review</h4>
                <h1>{this.props.title}</h1>
                <h4>{this.props.children}</h4>
                <ReviewTitle titlecolor={this.props.titlecolor}></ReviewTitle>
                <ReviewDescription></ReviewDescription>
                <ReviewActions like={this.props.like} unlike={this.props.unlike} un={this.props.username}></ReviewActions>
                
                
            </div>
        );
    }
}
 
export default ReviewComponent;