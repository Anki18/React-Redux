import axios from 'axios';

export const setOrigin = (origin) => {
    return {
        type: "SetOrigin",
        payload: origin
    };
};

export const setDestination = (destination) => {
    return {
        type: "SetDestination",
        payload: destination
    };
};

export const setEquipmentType = (destination) => {
    return {
        type: "SetEquipmentType",
        payload: destination
    };
};

export const setOriginCoordinates = response => {
    return {
        type: "SetOriginCoordinates",
        payload: response
    };
};
export const setDestinationCoordinates = response => {
    return {
        type: "SetDestinationCoordinates",
        payload: response
    };
};
export const receivedDistance = response => {
    return {
        type: "ReceivedDistance",
        payload: response
    };
};
export const findCoordinates = (origin, destination) => {
    return dispatch => {
        axios.all([
            axios.get('http://dev.virtualearth.net/REST/v1/Locations?query=' + origin + '&includeNeighborhood=0&include=ciso2&key= --'),
            axios.get('http://dev.virtualearth.net/REST/v1/Locations?query=' + destination + '&includeNeighborhood=0&include=ciso2&key= --')
        ]).then(axios.spread(function (originResponse, destinationResponse) {
            dispatch(setOriginCoordinates(originResponse));
            dispatch(setDestinationCoordinates(destinationResponse));
            axios
                .get('http://dev.virtualearth.net/REST/V1/Routes/Driving?o=json&wp.0='
                + originResponse.data.resourceSets["0"].resources["0"].point.coordinates.join() + '&wp.1='
                + destinationResponse.data.resourceSets["0"].resources["0"].geocodePoints["0"].coordinates.join()
                + '&avoid=minimizeTolls&key= --')
                .then(res => {
                    dispatch(receivedDistance(res.data.resourceSets["0"].resources["0"].travelDistance));
                });
        })).catch(e=>{
            console.log(e);
        });;
    };
};

