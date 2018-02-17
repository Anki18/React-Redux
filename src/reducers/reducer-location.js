export default function (
    state = {
        origin: "",
        destination: "",
        originCoordinates: "",
        destinationCoordinates: "",
        travelDistance: "",
        equipmentType: ""

    }, action) {
    switch (action.type) {
        case 'SetOriginCoordinates':
            return Object.assign({}, state, {
                originCoordinates: action.payload.data.resourceSets["0"].resources["0"].point.coordinates.join()
            });
        case 'SetDestinationCoordinates':
            return Object.assign({}, state, {
                destinationCoordinates: action.payload.data.resourceSets["0"].resources[1].geocodePoints["0"].coordinates.join()
            });
        case 'ReceivedDistance':
            return Object.assign({}, state, { travelDistance: action.payload });
        case 'SetOrigin':
            return Object.assign({}, state, { origin: action.payload });
        case 'SetDestination':
            return Object.assign({}, state, { destination: action.payload });
        case 'SetEquipmentType':
            return Object.assign({}, state, { equipmentType: action.payload });
        default:
            break;
    }
    return state;
}


