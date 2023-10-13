import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
// import { Pagination } from 'swiper/modules';
import {
	RxCrop,
	RxPencil2,
	RxDesktop,
	RxReader,
	RxRocket,
	RxArrowTopRight,
} from "react-icons/rx";

// <====<<==== Data ====>>====>
const serviceData = [
	{
		icon: <RxCrop />,
		title: "Branding",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		icon: <RxPencil2 />,
		title: "Design",
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
						<div className="bg-[#412f7b26] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer">
							{/* <====<<==== Icon ====>>====> */}
							<div>{item.icon}</div>
							{/* <====<<==== Title & Desc ====>>====> */}
							<div>
								<div>{item.title}</div>
								<p>{item.description}</p>
							</div>
							{/* <====<<==== Arrow ====>>====> */}
							<div className="text-3xl">
								<RxArrowTopRight />
							</div>
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default ServiceSlider;
