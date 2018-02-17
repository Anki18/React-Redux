import React from 'react';

const FormComponent = props => {
    const handleOnChange = (event) => {
        if (event.target.value.length > 0) {
            if (event.target.id === "origin") {
                props.setOrigin(event.target.value);
            }
            if (event.target.id === "destination") {
                props.setDestination(event.target.value);
            }
            if (event.target.id === "equipmentType") {
                props.setEquipmentType(event.target.value);
            }
        }
    }
    const handleSubmit = () => {
        if (props.locationReducer.origin !== "" && props.locationReducer.destination !== "") {
            props.findCoordinates(props.locationReducer.origin, props.locationReducer.destination)
        }
    };
    return (
        <form >
            <label>
                Origin : <input type="text" id="origin" onBlur={handleOnChange} placeholder="Enter Origin" />
            </label><br />
            <label>
                Destination : <input type="text" id="destination" onBlur={handleOnChange} placeholder="Enter Destination" />
            </label><br />
            <label>
                Equipment Type:
                <select id="equipmentType" onChange={handleOnChange}>
                    <option key="V" value="V">V</option>
                    <option key="R" value="R">R</option>
                </select>
            </label><br />
            <input type="button" value="Submit" onClick={handleSubmit} />
        </form>
    );
}

export default FormComponent;