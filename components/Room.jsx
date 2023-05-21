import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { MdPlayArrow } from "react-icons/md";

import CanvasLoader from "./Loader";

const Rooms = ({ isMobile }) => {
  const computer = useGLTF("./room/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.19}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.85}
        position={isMobile ? [0, -1.5, -0.1] : [0, -1.75, -0.5]}
        rotation={[0, -1.8, -0.0]}
      />
    </mesh>
  );
};

const RoomsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [isMobile]);

  return (
    <>
      <div className="absolute right-0 z-[5] top-4 md:px-0 px-4">
        <div className="max-w-[18rem] md:py-3 py-2 md:px-5 px-3.5 rounded-lg shadow-2xl dark:shadow-[#264b50] bg-gray-500 dark:bg-gray-600 text-white">
          Hello <span className="wave">👋</span>, I'm a Software Developer based
          in Bangladesh!
        </div>
        <MdPlayArrow className="rotate-90 md:mt-[-1rem] mt-[-0.8rem] md:text-5xl text-4xl text-gray-500 dark:text-gray-600" />
      </div>
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 5]}
        camera={{ position: [-70, 20, 20], fov: 8 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
          />
          <Rooms isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </>
  );
};

export default RoomsCanvas;
