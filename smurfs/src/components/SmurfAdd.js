import React from "react";
import { connect } from 'react-redux';
import { postingSmurfs, handleNewData } from '../actions';

const SmurfForm = props => {

    const handleSubmit = e => {
        e.preventDefault();
        props.postingSmurfs()
    }

    return (
        <div>
            <h1> Add a Smurf!</h1>
            <input
                type="text"
                name="name"
                onChange={handleNewData}
                placeholder="name"
            />
            <input
                type="text"
                name="age"
                onChange={handleNewData}
                placeholder="age"
            />
            <input
                type="text"
                name="height"
                onChange={handleNewData}
                placeholder="height"
            />
            <button onClick={handleSubmit}>Add Smurf</button>
        </ div>
    );
}

const mapStateToProps = state => {
    return {
        postingSmurfs: state.postingSmurfs
    }
}

export default connect(mapStateToProps, { postingSmurfs, handleNewData })(SmurfForm) 