import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RotatingLines } from 'react-loader-spinner';
import { MdPlayArrow } from "react-icons/md";

// 3d Model
const Model = () => {

    const [windowCount, setWindowCount] = useState(window.screen.width);
    const [scaleval, setScaleval] = useState(0.7);
    
    const actualWidth = () => {
      setWindowCount(window.innerWidth);
    }

    useEffect(() => {

      if(windowCount < 768 && windowCount > 570) {
        setScaleval(0.6);
      } else if (windowCount < 570) {
        setScaleval(0.55);
      } else {
        setScaleval(0.7);
      }

      window.addEventListener("resize", actualWidth);

      return () => {
        window.removeEventListener("resize", actualWidth);
      }
    }, [windowCount, scaleval]);

    const gltf = useLoader(GLTFLoader, "./ukhang.glb");
    return (
      <>
        <primitive 
          object={gltf.scene} 
          scale={scaleval}
        />
      </>
    );
};

// Handle loading
function Handle({ load }) {
  useEffect(() => {
    load(true)
    return () => load(false)
  }, [])
}

const Developer = () => {

  const [isLoading, load] = useState(true);

    return (
        <>
          {/* Developer information card */}
          <div className="absolute right-0 z-[5] top-4 md:px-0 px-4">
            <div className="max-w-[17rem] md:py-3 py-2 md:px-5 px-3.5 rounded-lg shadow-2xl dark:shadow-[#264b50] bg-gray-500 dark:bg-gray-600 text-white">
              Hello, I'm an Full Stack Enginner based in Bangladesh!
            </div>
            <MdPlayArrow className="rotate-90 md:mt-[-1rem] mt-[-0.8rem] md:text-5xl text-4xl text-gray-500 dark:text-gray-600"/>
          </div>

          <Canvas camera={{ fov: 10, position: [-15, 7, 20]}}>
            <ambientLight intensity={0.5} />
            <spotLight intensity={0.8} position={[300, 300, 400]} />
            <Suspense fallback={<Handle load={load} />}>
              <Model />
              <OrbitControls />
              <Environment preset="sunset"/>
            </Suspense>
          </Canvas>

          {/* Loading add */}
          {isLoading && <div className="absolute left-[45%] right-[45%] top-[30%]">
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="55"
              visible={true}
            />
          </div>}
        </>
    )
}

export default Developer;