import React, { Component } from 'react';
import { completeGoalRef, goalRef } from '../firebase';
import { connect } from 'react-redux';

class GoalItem extends Component {

    completeGoal() {
        const { email } = this.props.user;
        const { title, serverKey } = this.props.goal;
        goalRef.child(serverKey).remove();
        completeGoalRef.push({email, title});
    }

    renderCompleteButton() {
        return (
            <button 
                    className="btn btn-primary"
                    onClick={() => { this.completeGoal() }}
                    >
                    Complete
            </button>
        )
    }
    render() {
        const {title, email} = this.props.goal
        const isComplete = this.props.isComplete;
        return(
            <div style={{margin: '5px'}}>
                <strong>{title}</strong>
                <span style={{ marginRight: '5px' }}> { isComplete ? 'completed by' : 'submitted by' } <em>{email}</em></span>
                { !isComplete ? this.renderCompleteButton() : '' }
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    }
}

export default connect(mapStateToProps, null)(GoalItem);