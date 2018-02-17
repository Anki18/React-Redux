import React from 'react';
import {FormComponent, ResultComponent } from '../components';
import '../scss/App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {locationActions} from '../actions';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Instant Spot-Quotes</h1>
                </header>
                <div className="App-intro">
                    <FormComponent
                        locationReducer={this.props.locationReducer}
                        findCoordinates={this.props.findCoordinates}
                        setOrigin={this.props.setOrigin}
                        setDestination={this.props.setDestination}
                        setEquipmentType={this.props.setEquipmentType}
                    />
                </div>
                <hr />
                <div>
                    <ResultComponent
                        locationReducer={this.props.locationReducer}
                    />
                </div>
            </div>);
    }
}
function mapStateToProps(state) {
    return {
        locationReducer: state.locationReducer,
    };
}

function matchDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(
        Object.assign({}, locationActions), dispatch),
        dispatch
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
