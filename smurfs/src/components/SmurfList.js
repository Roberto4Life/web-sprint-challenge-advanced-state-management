import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';
import "./App.css";

const SmurfList = props => {
    console.log("getting props", props)
    if (props.isFetching) {
        return <div>Getting Smurfs'</div>
    }

    return (
        <>
            <button onClick={() => props.fetchSmurfs()}>
                Fetch All Smurfs
            </button>
            {props.items.map(items => (
                <>
                    <div className="area">
                        <div className="box">
                            <div>{items.name}</div>
                            <div>{items.age}</div>
                            <div>{items.height}</div>
                        </div>
                    </div>
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