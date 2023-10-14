import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { BsArrowTopRight } from "react-icons/bs";
import Image from "next/image";

// <====<<==== Data ====>>====>
const workSlides = {
	slides: [
		{
			images: [
				{
					title: "title",
					path: "/thumb1.jpg",
				},
				{
					title: "title",
					path: "/thumb2.jpg",
				},
				{
					title: "title",
					path: "/thumb3.jpg",
				},
				{
					title: "title",
					path: "/thumb4.jpg",
				},
			],
		},
		{
			images: [
				{
					title: "title",
					path: "/thumb4.jpg",
				},
				{
					title: "title",
					path: "/thumb1.jpg",
				},
				{
					title: "title",
					path: "/thumb2.jpg",
				},
				{
					title: "title",
					path: "/thumb3.jpg",
				},
			],
		},
	],
};

const WorkSlider = () => {
	return (
		<Swiper
			spaceBetween={10}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
			className="mySwiper h-[280px] sm:h-[480px]"
		>
			{workSlides.slides.map((slide, i) => {
				return (
					<SwiperSlide key={i}>
						<div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
							{slide.images.map((image, i) => {
								return (
									<div key={i}>
										<div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
											<div className="flex items-center justify-center relative overflow-hidden">
												{/* <====<<==== Image ====>>====> */}
												<Image
													src={image.path}
													width={500}
													height={300}
													alt=""
												/>
												{/* <====<<==== Overlay Gradient ====>>====> */}
												<div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default WorkSlider;
