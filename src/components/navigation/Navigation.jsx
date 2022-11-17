import { React, useState } from "react";

import Class from "./navigation.module.css";

import { FaHome, FaUserAlt } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { IoMdCode } from "react-icons/io";
import { VscFileCode } from "react-icons/vsc";

export default function Navigation() {
	const [activeLink, setActiveLink] = useState("#");
	return (
		<nav>
			<a
				href="#"
				onClick={() => setActiveLink("#")}
				className={activeLink === "#" ? Class.active : ""}>
				<FaHome />
			</a>
			<a
				href="#about"
				onClick={() => setActiveLink("#about")}
				className={activeLink === "#about" ? Class.active : ""}>
				<FaUserAlt />
			</a>
			<a
				href="#experience"
				onClick={() => setActiveLink("#experience")}
				className={activeLink === "#experience" ? Class.active : ""}>
				<IoMdCode />
			</a>
			<a
				href="#portfolio"
				onClick={() => setActiveLink("#portfolio")}
				className={activeLink === "#portfolio" ? Class.active : ""}>
				<VscFileCode />
			</a>
			<a
				href="#contact"
				onClick={() => setActiveLink("#contact")}
				className={activeLink === "#contact" ? Class.active : ""}>
				<SiGooglemessages />
			</a>
		</nav>
	);
}
