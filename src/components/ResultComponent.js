import React from 'react';

const ResultComponent = props => {
    return (
        <div>
            {!props.locationReducer.originCoordinates && !props.locationReducer.destinationCoordinates ?
                <div/> :
                <div>
                    {!props.locationReducer.originCoordinates ?
                        <label /> :
                        <label> Origin Co-ordinates : {props.locationReducer.originCoordinates} </label>
                    }
                    <br/>
                    {!props.locationReducer.destinationCoordinates ?
                        <label /> :
                        <label> Destination Co-ordinates  : {props.locationReducer.destinationCoordinates} </label>
                    }
                    <br/>
                    {!props.locationReducer.travelDistance ?
                        <label /> :
                        <label> Travel Distance : {props.locationReducer.travelDistance} </label>
                    }
                </div>
            }
        </div>
    );
};

export default ResultComponent;