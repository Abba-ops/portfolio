import { React, useEffect } from "react";

import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default function App() {
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("show");
				} else {
					entry.target.classList.remove("show");
				}
			});
		});

		const hiddenElements = document.querySelectorAll(".hidden");
		hiddenElements.forEach((element) => observer.observe(element));
	}, []);

	return (
		<>
			<Header />
			<Navigation />
			<About />
			<Experience />
			<Portfolio />
			<Testimonials />
			<Contact />
			<Footer />
		</>
	);
}
