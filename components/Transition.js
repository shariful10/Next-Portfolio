import { motion } from "framer-motion";

// <====<<==== Variants =====>>====>
const transitionVariants = {
	initial: {
		x: "100%",
		width: "100%",
	},
	animate: {
		x: "0%",
		width: "0%",
	},
	exit: {
		x: ["0%", "100%"],
		width: ["0%", "100%"],
	},
};

const Transition = () => {
	return (
		<>
			<motion.div
				className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2E2257]"
				variants={transitionVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={{ delay: 0.2, duration: 0.2, ease: "easeInOut" }}
			></motion.div>
			<motion.div
				className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3B2D71]"
				variants={transitionVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={{ delay: 0.3, duration: 0.3, ease: "easeInOut" }}
			></motion.div>
			<motion.div
				className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#4B3792]"
				variants={transitionVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={{ delay: 0.4, duration: 0.4, ease: "easeInOut" }}
			></motion.div>
		</>
	);
};

export default Transition;
