import {useWindowSize} from "@react-hook/window-size";

import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce
} from "react-particle-image";

import IntroduceImg from '../imgs/branding.png';

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x + 10, y, 12);
};

const round = (n: number, step = 20) => Math.ceil(n / step) * step;
// Try making me lower to see how performance degrades
const STEP = 30;
const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    // Canvases are much more performant when painting as few colors as possible.
    // Use color of pixel as color for particle however round to nearest 30
    // to decrease the number of unique colors painted on the canvas.
    // You'll notice if we remove this rounding, the framerate will slow down a lot.
    return `rgba(
      ${round(pixel.r, STEP)}, 
      ${round(pixel.g, STEP)}, 
      ${round(pixel.b, STEP)}, 
      ${round(pixel.a, STEP) / 255}
    )`;
  },
  radius: () => Math.random() * 1.5 + 1,
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  }
};

const ParticleHome = () => {
  const [width, height] = useWindowSize();
  return  (
    <>
      <ParticleImage
        src={IntroduceImg}
        width={Number(width)}
        height={Number(780)}
        scale={.85}
        entropy={3}
        maxParticles={8000}
        particleOptions={particleOptions}
        mouseMoveForce={motionForce}
        touchMoveForce={motionForce}
        backgroundColor="unset"
      />
    </>
  )
    
};

export default ParticleHome;
