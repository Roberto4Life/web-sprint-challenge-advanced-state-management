import axios from 'axios';

export const CATCH_ERROR = "CATCH_ERROR";
export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log("The axios call for Smurfs",res);
            dispatch({ type: FETCH_SUCCESS, payload: res})
        })
        .catch(err => {
            console.error("Error getting data from API", err.message);
            dispatch({ type: CATCH_ERROR, payload: err.message });
        });
}

export const postingSmurfs = newSmurf => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(res => {
        console.log("The axios post for Smurfs", res);
        dispatch({ type: FETCH_SUCCESS, payload: res})
      })
      .catch(err => {
        console.error("Error getting data from API", err.message);
        dispatch({ type: CATCH_ERROR, payload: err.message });
    });
};