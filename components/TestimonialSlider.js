import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

// <====<<==== Data ====>>====>
const testimonialData = [
	{
		image: "/t-avt-1.png",
		name: "Anne Smith",
		position: "Customer",
		message:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
	},
	{
		image: "/t-avt-2.png",
		name: "Jane Doe",
		position: "Customer",
		message:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
	},
	{
		image: "/t-avt-3.png",
		name: "Jhon Doe",
		position: "Customer",
		message:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
	},
];

const TestimonialSlider = () => {
	return (
		<Swiper
			spaceBetween={10}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
			className="mySwiper h-[320px] sm:h-[480px]"
		>
			{testimonialData.map((person, i) => {
				return (
					<SwiperSlide key={i}>
						<div>
							{/* <==<<=== Avatar, Name, Position ===>>==> */}
							<div>
								<div>
									{/* <===<<=== Avatar ===>>===> */}
									<div>Avatar</div>
									{/* <===<<=== Name ===>>===> */}
									<div>Name</div>
									{/* <===<<=== Position ===>>===> */}
									<div>Position</div>
								</div>
							</div>
							{/* <==<<=== Quote & Message ===>>==> */}
							<div>
								{/* <==<<=== Quote Icon ===>>==> */}
								<div className="mb-4">
									<FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
								</div>
								{/* <==<<=== Message ===>>==> */}
								<div>{person.message}</div>
							</div>
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default TestimonialSlider;
