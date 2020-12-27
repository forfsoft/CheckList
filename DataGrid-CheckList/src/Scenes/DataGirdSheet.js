import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SetScene } from '../Actions/Scene';
import DataGridEditor from '../Components/Organisms/DataGridEditor'
import DataGridTreeEditor from './../Components/Organisms/DataGridTreeEditor'

class DataGirdSheet extends Component {
    componentDidMount() {
        console.log('DataSheet component start');
    }

    render() {
        return (
            <div>
                <DataGridTreeEditor />
                {/* <DataGridEditor/> */}
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        current_scene: state.scene.current_scene
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSetScene: (param1) => dispatch(SetScene(param1))
    }
}
DataGirdSheet = connect(mapStateToProps, mapDispatchToProps)(DataGirdSheet);
export default DataGirdSheet;