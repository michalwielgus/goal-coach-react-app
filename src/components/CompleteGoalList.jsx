import React, { Component } from 'react';
import { completeGoalRef } from '../firebase';
import { setCompletedGoals } from '../actions';
import { connect } from 'react-redux';
import GoalItem from './GoalItem.jsx';

class CompleteGoalsList extends Component {

    componentDidMount() {
        completeGoalRef.on('value', snap => {
            let completeGoals = [];
            snap.forEach(goal => {
                let { email, title } = goal.val();
                let serverKey = goal.key;
                completeGoals.push({email, title, serverKey})
            });

            this.props.setCompletedGoals(completeGoals);
        })
    }

    clearAll() {
        completeGoalRef.set([]);
    }

    render() {
        return (
            <div>
                {this.props.completeGoals.map((goal, index) => {
                    return <GoalItem key={index} goal={goal} isComplete="true" />
                })
            }
            <button className="btn btn-primary" onClick={ () => this.clearAll() }>Clear all</button>
    </div>
        )
    }
}

function mapStateToProps(state) {
    const { completeGoals } = state;
    return {
        completeGoals
    }
}
export default connect(mapStateToProps, { setCompletedGoals })(CompleteGoalsList);