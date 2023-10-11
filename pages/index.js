import { motion } from "framer-motion";
import { fadeIn } from "./../variants";
import ProjectsBtn from "../components/ProjectsBtn";

const Home = () => {
	return (
		<div className="bg-primary/60 h-full">
			{/* <====<<==== Text ====>>====> */}
			<div className="w-ful h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
				<div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
					{/* <====<<==== Title ====>>====> */}
					<h1 className="h1">
						Transforming Ideas <br /> Into
						<span className="text-accent"> Digital Reality</span>
					</h1>
					{/* <====<<==== Subtitle ====>>====> */}
					<p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
						lorem ipsum dolor sit amet, consectetur adip nonum, sed
						do eiusmod tempor incididunt ut labore et dolore magna
						aliqua. Ut enim ad minim ven quis nostrud ex ea commodo
						consequat.
					</p>
					{/* <====<<==== Button ====>>====> */}
					<div className="flex justify-center xl:hidden relative">
						<ProjectsBtn />
					</div>
				</div>
			</div>
			{/* <====<<==== Image ====>>====> */}
			<div>text</div>
		</div>
	);
};

export default Home;
