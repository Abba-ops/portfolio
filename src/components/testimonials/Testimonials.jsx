import React from "react";

import Class from "./testimonials.module.css";
import Picture from "../../assets/picture.png";

// Import Swiper core and required modules
import { Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
	{
		avater: Picture,
		name: "Dave James",
		review:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, voluptas accusamus recusandae sit doloribus quibusdam commodi, illum delectus ab deserunt tenetur maxime repellat quidem incidunt beatae! Ut sit quasi voluptatum.",
	},
	{
		avater: Picture,
		name: "Dave James",
		review:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, voluptas accusamus recusandae sit doloribus quibusdam commodi, illum delectus ab deserunt tenetur maxime repellat quidem incidunt beatae! Ut sit quasi voluptatum.",
	},
	{
		avater: Picture,
		name: "Dave James",
		review:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, voluptas accusamus recusandae sit doloribus quibusdam commodi, illum delectus ab deserunt tenetur maxime repellat quidem incidunt beatae! Ut sit quasi voluptatum.",
	},
	{
		avater: Picture,
		name: "Dave James",
		review:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, voluptas accusamus recusandae sit doloribus quibusdam commodi, illum delectus ab deserunt tenetur maxime repellat quidem incidunt beatae! Ut sit quasi voluptatum.",
	},
	{
		avater: Picture,
		name: "Dave James",
		review:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, voluptas accusamus recusandae sit doloribus quibusdam commodi, illum delectus ab deserunt tenetur maxime repellat quidem incidunt beatae! Ut sit quasi voluptatum.",
	},
];

export default function Testimonials() {
	return (
		<section id="testimonials">
			<h5>Review from Clients</h5>
			<h2 className="hidden">Testimonials</h2>
			<Swiper
				className={`${Class.testimonials__container} ${Class.container}`}
				modules={[Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={1}
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}>
				{data.map(({ avater, name, review, index }) => {
					return (
						<div className="hidden">
							<SwiperSlide key={index} className={Class.testimonial}>
								<div className={Class.client__avater}>
									<img src={avater} alt="Client image" className="hidden" />
								</div>
								<h5 className={Class.client__name}>{name}</h5>
								<small className={Class.client__review}>{review}</small>
							</SwiperSlide>
						</div>
					);
				})}
			</Swiper>
		</section>
	);
}
