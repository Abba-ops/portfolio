import React from "react";

import Class from "./portfolio.module.css";
import project_one_image from "../../assets/project_one.png";
import project_two_image from "../../assets/project_two.png";
import project_three_image from "../../assets/project_three.png";
import project_four_image from "../../assets/project_four.png";
import project_five_image from "../../assets/project_five.png";
import project_six_image from "../../assets/project_six.png";

const data = [
	{
		id: 1,
		image: project_one_image,
		title: "This is a Shopping cart",
		github: "github.com/Abba-ops/JS-Shopping-cart",
	},
	{
		id: 2,
		image: project_two_image,
		title: "This is a Meetup application",
		github: "https://github.com/Abba-ops/Meetup-application-",
	},
	{
		id: 3,
		image: project_three_image,
		title: "This is a Portfolio application",
		github: "",
	},
	{
		id: 4,
		image: project_four_image,
		title: "This is a Blog application",
		github: "https://github.com/Abba-ops/Blog-application-",
	},
	{
		id: 5,
		image: project_five_image,
		title: "This is an Online shop",
		github: "",
	},
	{
		id: 6,
		image: project_six_image,
		title: "This is a Snake game",
		github: "",
	},
];

export default function Portfolio() {
	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2 className="hidden">Portfolio</h2>
			<div className={`${Class.portfolio__container} ${Class.container}`}>
				{data.map(({ id, image, title, github }) => {
					return (
						<article key={id} className={Class.portfolio__item}>
							<div className={Class["portfolio__item--image"]}>
								<img src={image} alt={title} className="hidden" />
							</div>
							<h3 className="hidden">{title}</h3>
							<div className={Class.portfolio__btn}>
								<a href={github} className="btn hidden" target="_blank">
									Github
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
}
