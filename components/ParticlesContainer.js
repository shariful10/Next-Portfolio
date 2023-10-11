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
						}
					},
				},
			}}
		/>
	);
};

export default ParticlesContainer;
