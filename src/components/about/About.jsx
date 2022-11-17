import React from "react";

import Class from "./about.module.css";
import my_image from "../../assets/my_image.png";

import { BsFillAwardFill, BsFolderFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

export default function About() {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2 className="hidden">About Me</h2>
			<div className={`${Class.about__container} ${Class.container}`}>
				<div className={Class.about__me}>
					<div className="hidden">
						<div className={Class.wave}>
							<img src={my_image} alt="My image" />
							<figcaption>Jadesola</figcaption>
						</div>
					</div>
				</div>
				<div className={Class.about__content}>
					<div className={Class.about__cards}>
						<article className={Class.about__card}>
							<BsFillAwardFill className={Class.about_icon} />
							<h5 className="hidden">Experience</h5>
							<small className="hidden">2+ Years Working</small>
						</article>
						<article className={Class.about__card}>
							<FaUsers className={Class.about_icon} />
							<h5 className="hidden">Clients</h5>
							<small className="hidden">3+ World wide</small>
						</article>
						<article className={Class.about__card}>
							<BsFolderFill className={Class.about_icon} />
							<h5 className="hidden">Projects</h5>
							<small className="hidden">21+ Completed</small>
						</article>
					</div>
					<p className="hidden">
						My name is Jadesola Kajeyale Oluwaseun, I am a hard-working, honest
						individual. I am a software developer, always willing to learn new
						skills. I am friendly, helpful, and polite, have a good sense of
						humor. I can work independently and also within a team setting. I am
						organized and reliable, and able to listen effectively when solving
						problems.
					</p>
					<a href="#contact" className="btn hidden">
						Let's Chat
					</a>
				</div>
			</div>
		</section>
	);
}
