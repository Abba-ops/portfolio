import React from "react";

import Class from "./experience.module.css";

import { FaCheckCircle } from "react-icons/fa";

export default function Experience() {
	return (
		<section id="experience">
			<h5>What Skills I Have</h5>
			<h2 className="hidden">My Experience</h2>
			<div className={`${Class.experience__container} ${Class.container}`}>
				<div className="hidden">
					<h3 className="hidden">Frontend Development</h3>
					<div className={Class.experience__content}>
						<article className={Class.experience__details}>
							<FaCheckCircle className={Class["experience__details--icon"]} />
							<div>
								<h4 className="hidden">HTML</h4>
								<small className="text__light hidden">Experienced</small>
							</div>
						</article>
						<article className={Class.experience__details}>
							<FaCheckCircle className={Class["experience__details--icon"]} />
							<div>
								<h4 className="hidden">CSS</h4>
								<small className="text__light hidden">Intermediate</small>
							</div>
						</article>
						<article className={Class.experience__details}>
							<FaCheckCircle className={Class["experience__details--icon"]} />
							<div>
								<h4 className="hidden">JavaScript</h4>
								<small className="text__light hidden">Experienced</small>
							</div>
						</article>
						<article className={Class.experience__details}>
							<FaCheckCircle className={Class["experience__details--icon"]} />
							<div>
								<h4 className="hidden">Bootstrap</h4>
								<small className="text__light hidden">Experienced</small>
							</div>
						</article>
						<article className={Class.experience__details}>
							<FaCheckCircle className={Class["experience__details--icon"]} />
							<div>
								<h4 className="hidden">Tailwind</h4>
								<small className="text__light hidden">Experienced</small>
							</div>
						</article>
						<article className={Class.experience__details}>
							<FaCheckCircle className={Class["experience__details--icon"]} />
							<div>
								<h4 className="hidden">React</h4>
								<small className="text__light hidden">Experienced</small>
							</div>
						</article>
					</div>
				</div>
				<div className="hidden">
					<h3 className="hidden">Backend Development</h3>
					<div className={Class.experience__content}>
						<article className={Class.experience__details}>
							<FaCheckCircle className={Class["experience__details--icon"]} />
							<div>
								<h4 className="hidden">Node JS</h4>
								<small className="text__light hidden">Experienced</small>
							</div>
						</article>
						<article className={Class.experience__details}>
							<FaCheckCircle className={Class["experience__details--icon"]} />
							<div>
								<h4 className="hidden">MongoDB</h4>
								<small className="text__light hidden">Intermediate</small>
							</div>
						</article>
						<article className={Class.experience__details}>
							<FaCheckCircle className={Class["experience__details--icon"]} />
							<div>
								<h4 className="hidden">MySQL</h4>
								<small className="text__light hidden">Basic</small>
							</div>
						</article>
						<article className={Class.experience__details}>
							<FaCheckCircle className={Class["experience__details--icon"]} />
							<div>
								<h4 className="hidden">Python</h4>
								<small className="text__light hidden">Experienced</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
}
