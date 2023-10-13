import { motion } from "framer-motion";
import Circles from "./../../components/Circles";
import Bulb from "./../../components/Bulb";

const Services = () => {
	return (
		<div className="h-screen bg-primary/30 py-36 flex items-center">
			<Circles />
			<div className="container mx-auto"></div>
			<Bulb />
		</div>
	);
};

export default Services;
