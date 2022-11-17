import { React, useRef } from "react";

import Class from "./contact.module.css";

import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsMessenger } from "react-icons/bs";

import emailjs from "emailjs-com";

export default function Contact() {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm(
			"service_mwjyexh",
			"template_zp84koe",
			form.current,
			"237wbFV4oov7-t92n"
		);
		e.target.reset().then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	return (
		<section id="contact">
			<h5>Get in Touch</h5>
			<h2 className="hidden">Contact</h2>
			<div className={`${Class.contact__container} ${Class.container}`}>
				<div className={Class.contact__options}>
					<article className={Class.contact__option}>
						<MdEmail className={Class["contact__option--icon"]} />
						<h4 className="hidden">Email</h4>
						<h5 className="hidden">johnbabs182@gmail.com</h5>
						<a href="mailto:johnbabs182@gmail.com" target="_blank">
							Send a message
						</a>
					</article>
					<article className={Class.contact__option}>
						<BsMessenger className={Class["contact__option--icon"]} />
						<h4 className="hidden">Messenger</h4>
						<h5 className="hidden">Jadesola Kajeyale</h5>
						<a href="https://m.me/" target="_blank">
							Send a message
						</a>
					</article>
					<article className={Class.contact__option}>
						<IoLogoWhatsapp className={Class["contact__option--icon"]} />
						<h4 className="hidden">WhatsApp</h4>
						<h5 className="hidden">Jadesola Kajeyale</h5>
						<a
							href="https://api.whatsapp.com/send?phone=2349064014780"
							target="_blank">
							Send a message
						</a>
					</article>
				</div>
				<form ref={form} onSubmit={sendEmail} className="hidden">
					<input
						type="text"
						name="name"
						placeholder="your full name"
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="your email address"
						required
					/>
					<textarea
						name="message"
						rows="8"
						placeholder="your message"
						required></textarea>
					<button type="submit" className="btn hidden">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
}
