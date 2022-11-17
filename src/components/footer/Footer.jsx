import React from "react";

import Class from "./footer.module.css";

import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
	return (
		<footer id="footer">
			<a href="#" className={Class.footer__logo}>
				Jadesola Kajeyale
			</a>

			<ul className={Class.permalinks}>
				<li>
					<a href="#" className="hidden">
						Home
					</a>
				</li>
				<li>
					<a href="#about" className="hidden">
						About
					</a>
				</li>
				<li>
					<a href="#experience" className="hidden">
						Experience
					</a>
				</li>
				<li>
					<a href="#portfolio" className="hidden">
						Portfolio
					</a>
				</li>
				<li>
					<a href="#testimonials" className="hidden">
						Testimonials
					</a>
				</li>
				<li>
					<a href="#contact" className="hidden">
						Contact
					</a>
				</li>
			</ul>

			<div className={Class.footer__socials}>
				<a href="" className="hidden" target="_blank">
					<BsFacebook />
				</a>
				<a
					href="https://www.instagram.com/jadesola_kajeyale/"
					className="hidden"
					target="_blank">
					<AiFillInstagram />
				</a>
				<a
					href="https://twitter.com/BabsJohn9"
					className="hidden"
					target="_blank">
					<FaTwitter />
				</a>
			</div>

			<div className={Class.footer__copyright}>
				<small className="hidden">
					&copy; 2022 Jadesola Kajeyale. All rights reserved.
				</small>
			</div>
		</footer>
	);
}
