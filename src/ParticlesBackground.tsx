// import React, { useCallback } from 'react';
// import Particles from "@tsparticles/react";
// // Import the preset loader function
// import { loadBubblesPreset } from "@tsparticles/preset-bubbles";
// // You might need the engine if the preset alone is not enough
// // import { loadFull } from "tsparticles"; // Or loadSlim, loadBasic, etc.

// function ParticlesBackground() {
//   // This initializes the tsparticles engine (needed for presets)
//   // It's called once per component instance
//   const particlesInit = useCallback(async (engine: any) => {
//     console.log("Initializing tsParticles engine...");
//     // Here you can load presets or custom shapes
//     // await loadFull(engine); // Use this if you need the full engine features
//     await loadBubblesPreset(engine); // Load the bubbles preset specifically
//     console.log("Bubbles preset loaded.");
//   }, []);

//   const particlesLoaded = useCallback(async (container: any) => {
//     console.log("Particles container loaded:", container);
//   }, []);

//   // Options can be directly passed here if you don't use a preset
//   // For using the preset, we mostly rely on the init function above.
//   // However, you CAN override preset options here if needed.
//   const options = {
//     preset: "bubbles", // Specify the preset name loaded via init
//     // --- You can override specific preset options here ---
//     // background: {
//     //   color: {
//     //     value: '#0d47a1', // Example: Change background color
//     //   },
//     // },
//     // particles: {
//     //   color: {
//     //     value: ["#ffffff", "#ff0000"] // Example: Change particle colors
//     //   },
//     //   move: {
//     //     speed: 1 // Example: Slow down particles
//     //   }
//     // }
//     // ----------------------------------------------------
//   };


//   return (
//     <Particles
//       id="tsparticles" // Unique ID for this instance
//       init={particlesInit}
//       loaded={particlesLoaded}
//       options={options}
//       style={{
//         position: 'absolute', // Or 'fixed' if you want it relative to viewport
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         zIndex: -1, // Ensure it's behind other content
//       }}
//     />
//   );
// }

// export default ParticlesBackground;