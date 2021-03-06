import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';

import AddGoal from './AddGoal.jsx';
import GoalList from './GoalList.jsx';
import CompleteGoalList from './CompleteGoalList.jsx';


class App extends Component {
    signOut() {
        firebaseApp.auth().signOut();
    }
    render() {
        return(
            <div>
                <h3>GoalCoach
                </h3>
                <AddGoal /><hr/>
                <h4>Goals</h4>
                <GoalList /><hr/>
                <h4>Complete Goals</h4>
                <CompleteGoalList /><hr/>
                <button
                    className="btn btn-danger"
                    onClick={() => this.signOut()}
                    >
                    Sign Out
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
    };
}
export default connect(mapStateToProps, null)(App);
