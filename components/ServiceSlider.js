import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import {
	RxCrop,
	RxReader,
	RxRocket,
	RxDesktop,
	RxPencil2,
	RxArrowTopRight,
} from "react-icons/rx";

// <====<<==== Data ====>>====>
const serviceData = [
	{
		icon: <AiFillHtml5 />,
		title: "HTML",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		icon: <SiCss3 />,
		title: "CSS",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		icon: <RxDesktop />,
		title: "Development",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		icon: <RxReader />,
		title: "Copywriting",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		icon: <RxRocket />,
		title: "SEO",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
];

const ServiceSlider = () => {
	return (
		<Swiper
			breakpoints={{
				320: {
					slidesPerView: 1,
					spaceBetween: 15,
				},
				640: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
			}}
			freeMode={true}
			pagination={{
				clickable: true,
			}}
			modules={[FreeMode, Pagination]}
			className="mySwiper h-[240px] sm:h-[340px]"
		>
			{serviceData.map((item, i) => {
				return (
					<SwiperSlide key={i}>
						<div className="bg-[#412f7b26] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89, 65, 169, 0.15)] transition-all duration-300">
							{/* <====<<==== Icon ====>>====> */}
							<div className="text-4xl text-accent mb-4">{item.icon}</div>
							{/* <====<<==== Title & Desc ====>>====> */}
							<div className="mb-8">
								<div className="mb-2 text-lg">{item.title}</div>
								<p className="max-w-[350px] leading-normal">{item.description}</p>
							</div>
							{/* <====<<==== Arrow ====>>====> */}
							<div className="text-3xl">
								<RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
							</div>
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default ServiceSlider;
