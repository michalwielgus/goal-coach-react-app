import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';
import { setGoals } from '../actions';
import GoalItem from './GoalItem.jsx';

class GoalList extends Component {

    componentDidMount() {
        goalRef.on('value', snap => {
            let goals = [];
            snap.forEach(goal => {
                let { email, title } = goal.val();
                let serverKey = goal.key;
                goals.push({email, title, serverKey})
            });

            this.props.setGoals(goals);
        })
    }

    render() {
        console.log('this.props.goalsssss: ', this.props.goals)
        return (
            <div>
                    {this.props.goals.map((goal, index) => {
                        return <GoalItem key={index} goal={goal} />
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { goals } = state;
    return {
        goals
    }
}
export default connect(mapStateToProps, { setGoals })(GoalList);