import React, { useRef } from 'react';
import { extend, useThree, useFrame } from 'react-three-fiber';
import OrbitControls from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

function Controls() {
  // const controlsRef = useRef();
  const { camera, gl } = useThree();



  // useFrame(() => controlsRef.current && controlsRef.current.update());

  return (
    <orbitControls
      args={[camera, gl.domElement]}
     />
  );
}

export default Controls;
