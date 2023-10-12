/* eslint-disable react/jsx-key */
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./../../variants";
import Circles from "../../components/Circles";
import Avatar from "./../../components/Avatar";
import { BiLogoTypescript } from "react-icons/bi";

import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaWordpress,
	FaElementor,
	FaBootstrap,
} from "react-icons/fa";

import {
	SiNextdotjs,
	SiFramer,
	SiAdobephotoshop,
	SiTailwindcss,
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
					<SiFramer />,
				],
			},
			{
				title: "Wordpress",
				icons: [
					<FaWordpress />,
					,
					<FaElementor />,
					<SiAdobephotoshop />,
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
			<div className="container mx-auto h-screen py-32 flex flex-col items-center xl:flex-row gap-x-6">
				<div className="flex-1 flex flex-col justify-center">text</div>
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
								<div key={i} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
									{/* <====<<==== Title ====>>====> */}
									<div>{item.title}</div>
									<div className="hidden md:flex">-</div>
									<div>{item.stage}</div>
									<div className="flex gap-x-4">
									{/* <====<<==== Icons ====>>====> */}
									{item.icons?.map((icon, i) => {
										return <div key={i} className="text-2xl transition-all duration-500">{icon}</div>;
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
