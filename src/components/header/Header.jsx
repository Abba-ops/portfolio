import React from "react";

import Class from "./header.module.css";
import my_image from "../../assets/my_image.png";

import {
	AiFillInstagram,
	AiFillLinkedin,
	AiOutlineGithub,
} from "react-icons/ai";

export default function Header() {
	return (
		<header>
			<div className={`${Class.header__container} ${Class.container}`}>
				<h5>Hello I'm</h5>
				<h1 className="hidden">Jadesola Kajeyale</h1>
				<h5 className="text__light">Fullstack Developer</h5>
				<div className={Class.c_t_a}>
					<a
						href="https://docs.google.com/document/d/1V0xyOsYmZW-wFQCicTOFfhW33jlpIVwBr6H4HpQQJgg/edit?usp=share_link"
						target="_blank"
						className="btn hidden">
						Resume
					</a>
					<a href="#contact" className="btn hidden">
						Let's Chat
					</a>
				</div>
				<div className={Class.header__socials}>
					<a
						href="https://www.linkedin.com/in/babs-john-9123b7257/"
						target="_blank"
						className="hidden">
						<AiFillLinkedin />
					</a>
					<a
						href="https://github.com/Abba-ops"
						target="_blank"
						className="hidden">
						<AiOutlineGithub />
					</a>
					<a
						href="https://www.instagram.com/jadesola_kajeyale/"
						target="_blank"
						className="hidden">
						<AiFillInstagram />
					</a>
				</div>
				<div className={Class.my__image}>
					<img src={my_image} alt="My image" />
				</div>
				<a href="#footer" className={Class.scroll__down}>
					Scroll Down
				</a>
			</div>
		</header>
	);
}
