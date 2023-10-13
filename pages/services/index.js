import { motion } from "framer-motion";
import Circles from "./../../components/Circles";
import Bulb from "./../../components/Bulb";
import ServiceSlider from "../../components/ServiceSlider";

const Services = () => {
	return (
		<div className="h-screen bg-primary/30 py-36 flex items-center">
			<Circles />
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row gap-x-8">
					{/* <====<<==== Text ====>>====> */}
					<div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
						<h2 className="h2 xl:mt-8">
							My Services <span className="text-accent">.</span>
						</h2>
						<p className="mb-4 max-w-[400px] mx-auto lg:mx-0">Lorem ipsum dolor sit, amet consectetor adipisicing elit. A eveniet dignissimos distinctio tempore harmore landiuen.</p>
					</div>
					{/* <====<<==== Slider ====>>====> */}
					<ServiceSlider />
				</div>
			</div>
			<Bulb />
		</div>
	);
};

export default Services;
