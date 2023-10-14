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
			className="mySwiper h-[240px] sm:h-[340px]"
		>
			{workSlides.slides.map((slide, i) => {
				return (
					<SwiperSlide key={i}>
						<div className="grid grid-cols-2 grid-rows-2 gap-4">
              {slide.images.map((image, i) => {
                return <div key={i}>
                  <div>
                  {/* // <====<<==== Image ====>>====> */}
                  <Image src={image.path} width={500} height={300} alt=""/>
                  </div>
                </div>
              })}
            </div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default WorkSlider;
