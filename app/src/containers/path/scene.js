import React from 'react';
import * as THREE from 'three';
import Controls from "./controls";
import {useThree} from "react-three-fiber";
import Lights from "./lights";
import {Axes, Cube, Line, MeshLine} from "./shapes";
import {connect, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import Trace from "./trace";


function Scene() {
    const {camera} = useThree();
    camera.fov = 45;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.near = 0.1;
    camera.far = 1000;

    camera.up.set(0, 0, 1);
    camera.position.set(-5, 7, 5);

    return (
        <>
            <Axes/>
            <Controls/>
            <Trace/>
        </>
    )
}

// function mapStateToProps(state) {
//     return {
//         points: state.path.traversal
//     }
// }
//
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//     }, dispatch);
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Scene);
export default Scene;
