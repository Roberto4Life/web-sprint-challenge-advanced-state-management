import React, {useState} from "react";
import { connect } from 'react-redux';
import { postingSmurfs } from '../actions';

const SmurfForm = props => {

    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })

    const handleSubmit = e => {
        e.preventDefault();
        props.postingSmurfs(newSmurf);
        setNewSmurf({name: "",age: "",height: ""})
    };

    const handleChanges = e => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <h1>Adding New Smurf</h1>
            <form>
                <input
                    name="name"
                    onChange={handleChanges}
                    type='text'
                    placeholder='Name'
                />
                <input
                    name="age"
                    onChange={handleChanges}
                    type='number'
                    placeholder='Age'
                />
                <input
                    name= "height"
                    onChange={handleChanges}
                    type='text'
                    placeholder='Height'
                />
                <button onClick={handleSubmit}>Add New</button>
            </form>
        </div>
    );
};

export default connect(null, {postingSmurfs})(SmurfForm);