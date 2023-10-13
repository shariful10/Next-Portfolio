/* eslint-disable react/jsx-key */
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./../../variants";
import { FiFigma } from "react-icons/fi";
import Circles from "../../components/Circles";
import Avatar from "./../../components/Avatar";
import { BiLogoTypescript } from "react-icons/bi";
import CountUp from "react-countup";

import {
	FaJs,
	FaCss3,
	FaHtml5,
	FaReact,
	FaWordpress,
	FaElementor,
	FaBootstrap,
} from "react-icons/fa";

import {
	SiRedux,
	SiAdobexd,
	SiNextdotjs,
	SiTailwindcss,
	SiAdobephotoshop,
} from "react-icons/si";

// <====<<==== Data ====>>====>
export const aboutData = [
	{
		title: "skills",
		info: [
			{
				title: "Web Development",
				icons: [
					<FaHtml5 />,
					<FaCss3 />,
					<FaBootstrap />,
					<SiTailwindcss />,
					<FaJs />,
					<BiLogoTypescript />,
					<FaReact />,
					<SiNextdotjs />,
					<SiRedux />,
				],
			},
			{
				title: "Wordpress",
				icons: [
					<FaWordpress />,
					<FaElementor />,
					<SiAdobephotoshop />,
					<SiAdobexd />,
					<FiFigma />,
				],
			},
		],
	},
	// {
	// 	title: "awards",
	// 	info: [
	// 		{
	// 			title: "Webby Awards - Honoree",
	// 			stage: "2011 - 2012",
	// 		},
	// 		{
	// 			title: "Adobe Design Achievement Awards - Finalist",
	// 			stage: "2009 - 2010",
	// 		},
	// 	],
	// },
	{
		title: "experience",
		info: [
			{
				title: "Web Developer - XYZ Company",
				stage: "2022 - 2023",
			},
			{
				title: "Wordpress - fiverr",
				stage: "2022 - 2023",
			},
			// {
			// 	title: "Intern - XYZ Company",
			// 	stage: "2022 - 2023",
			// },
		],
	},
	{
		title: "credentials",
		info: [
			// {
			// 	title: "Web Development - Programming Hero, Dhanmondi, Dhaka",
			// 	stage: "2011",
			// },
			{
				title: "Certified MERN Stack Web Developer - Programming Hero, Dhanmondi, Dhaka",
				stage: "2023",
			},
			{
				title: "Wordpress Developer - Soft-tech IT Institute, Uttara, Dhaka",
				stage: "2019",
			},
		],
	},
];

const About = () => {
	const [index, setIndex] = useState(0);

	return (
		<div className="h-screen bg-primary/30 text-center xl:text-left">
			<Circles />
			{/* <====<<==== Avatar ====>>====> */}
			<motion.div
				variants={fadeIn("right", 0.2)}
				initial="hidden"
				animate="show"
				exit="hidden"
				className="hidden xl:flex absolute bottom-0 -left-[370px]"
			>
				<Avatar />
			</motion.div>
			<div className="container mx-auto md:h-screen py-32 flex flex-col items-center xl:flex-row gap-x-6">
				<div className="flex-1 flex flex-col justify-center">
					<h2 className="h2">
						Captivating{" "}
						<span className="text-accent">stories </span>birth
						magnificent design.
					</h2>
					<p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
						10 years ago, I began freelancing as a developer. Since
						then, I&apos;ve done remote work for agencies,
						counsulted for startups, and collaborated on digital
						products for business and consumer use.
					</p>
					{/* <====<<==== Counters ====>>====> */}
					<div>
						<div className="flex flex-1 xl:gap-x-6">
							{/* <====<<==== Experience ====>>====> */}
							<div className="relative flex-1 after:w-[2px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={2} duration={5} /> +
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
							</div>
							{/* <====<<==== Clients ====>>====> */}
							<div className="relative flex-1 after:w-[2px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={250} duration={5} /> +
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied clients</div>
							</div>
							{/* <====<<==== Projects ====>>====> */}
							<div className="relative flex-1 after:w-[2px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={100} duration={5} /> +
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished Projects</div>
							</div>
							{/* <====<<==== Awards ====>>====> */}
							<div className="relative flex-1">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={1} duration={5} /> +
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Winning Awards</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
					<div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
						{aboutData.map((item, i) => {
							return (
								<div
									key={i}
									onClick={() => setIndex(i)}
									className={`${
										index === i &&
										"text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
									} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
								>
									{item.title}
								</div>
							);
						})}
					</div>
					<div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
						{aboutData[index].info.map((item, i) => {
							return (
								<div
									key={i}
									className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
								>
									{/* <====<<==== Title ====>>====> */}
									<div className="font-light mb-2 md:mb-0">
										{item.title}
									</div>
									<div className="hidden md:flex">-</div>
									<div>{item.stage}</div>
									<div className="flex gap-x-4">
										{/* <====<<==== Icons ====>>====> */}
										{item.icons?.map((icon, i) => {
											return (
												<div
													key={i}
													className="text-2xl text-white"
												>
													{icon}
												</div>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
