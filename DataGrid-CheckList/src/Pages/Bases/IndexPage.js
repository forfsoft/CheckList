import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SetScene } from '../../Actions/Scene';

class IndexPage extends Component {
    componentDidMount() {
        console.log('IndexScene component start');
    }

    renderScene = () => {
        return (<div>hello world!</div>);
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
IndexPage = connect(mapStateToProps, mapDispatchToProps)(IndexPage);
export default IndexPage;