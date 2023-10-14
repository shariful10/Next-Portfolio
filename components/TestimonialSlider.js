import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

// <====<<==== Data ====>>====>
const testimonialData = [
	{
		image: "/t-avt-1.png",
		name: "Anne Smith",
		position: "Customer",
		message:
			"Bistro Boss Restaurant's website is a visual feast. With its sleek design and seamless navigation, it's a delight to explore. The enticing menu and commitment to local ingredients make it a promising culinary destination.",
	},
	{
		image: "/t-avt-2.png",
		name: "Janifar Laurance",
		position: "Customer",
		message:
			"Lawyer Justice's website is a user-friendly and professional platform that instills confidence in their legal expertise. With its clean design and organized layout, it's easy to find the information and services needed. A reliable resource for legal assistance.",
	},
	{
		image: "/t-avt-3.png",
		name: "Jhon Doe",
		position: "Customer",
		message:
			"Sports Gear's cricket training website is a game-changer for cricket enthusiasts. With its extensive collection of top-quality gear and user-friendly interface, it's the ultimate destination for elevating your cricket skills. Find everything you need to excel on the field and take your game to new heights.",
	},
];

const TestimonialSlider = () => {
	return (
		<Swiper
			navigation={true}
			pagination={{
				clickable: true,
			}}
			modules={[Navigation, Pagination]}
			className="mySwiper h-[320px] sm:h-[480px]"
		>
			{testimonialData.map((person, i) => {
				return (
					<SwiperSlide key={i}>
						<div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
							{/* <==<<=== Avatar, Name, Position ===>>==> */}
							<div className="w-full max-w-[300px] flex flex-col xl:justify-center item-center relative mx-auto xl:mx-0">
								<div className="flex flex-col justify-center item-center">
									{/* <===<<=== Avatar ===>>===> */}
									<div className="mb-2 mx-auto">
										<Image src={person.image} width={100} height={100} alt='' />
									</div>
									{/* <===<<=== Name ===>>===> */}
									<div className="text-lg">{person.name}</div>
									{/* <==<<=== Position ===>>==> */}
									<div className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
								</div>
							</div>
							{/* <==<<=== Quote & Message ===>>==> */}
							<div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
								{/* <==<<=== Quote Icon ===>>==> */}
								<div className="mb-4">
									<FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
								</div>
								{/* <==<<=== Message ===>>==> */}
								<div className="xl:text-lg text-center md:text-left">{person.message}</div>
							</div>
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default TestimonialSlider;
