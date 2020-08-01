import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';

const SmurfList = props => {
    console.log("getting props", props)
    if (props.isFetching) {
        return <div>Getting Smurfs'</div>
    }

    return (
        <>
            <button onClick={() => props.fetchSmurfs()}>Fetch All Smurfs</button>
            {props.items.map(smurf => (
            <>
                <div>{smurf.name}</div>
                <div>{smurf.age}</div>
                <div>{smurf.height}</div>
            </>
            ))}
        </>
    )
};

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        items: state.items,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { fetchSmurfs }
)(SmurfList);