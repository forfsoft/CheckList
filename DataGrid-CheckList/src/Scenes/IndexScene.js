import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SetScene } from './../Actions/Scene';
 import DataGirdSheet from './DataGirdSheet'

class IndexScene extends Component {
    componentDidMount() {
        console.log('IndexScene component start');
    }

    renderScene = () => {
        return (<DataGirdSheet />);
    };

    render() {
        return (
            <div>
                {this.renderScene()}
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
IndexScene = connect(mapStateToProps, mapDispatchToProps)(IndexScene);
export default IndexScene;