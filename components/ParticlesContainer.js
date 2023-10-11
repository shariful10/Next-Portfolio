import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

const ParticlesContainer = () => {
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (engine) => {}, []);

	return (
		<Particles
			className="w-full h-full absolute translate-z-0"
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				fullScreen: { enable: false },
				background: {
					color: {
						value: "",
					},
				},
				fpsLimit: 120,
				interactivity: {
					events: {
						onClick: {
							enable: false,
							mode: "push",
						},
						onHover: {
							enable: true,
							mode: "repulse",
						},
						resize: true,
					},
					modes: {
						push: {
							quantity: 90,
						},
						repalse: {
							distance: 200,
							duration: 0.4,
						},
					},
				},
				particles: {
					color: {
						value: "#E68E2E",
					},
					links: {
						color: "#F5D393",
						distance: 150,
						enable: true,
						opacity: 0.5,
						width: 1,
					},
					collisions: {
						enable: true,
					},
					move: {
						direction: "none",
						enable: true,
						outMode: {
							default: "bounce",
						},
						random: false,
						speed: 1,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 80,
					},
					opacity: {
						value: 0.5,
					},
					shape: {
						type: "circle",
					},
					size: {
						min: 1,
						max: 5,
					},
				},
				detectRetina: true,
			}}
		/>
	);
};

export default ParticlesContainer;
