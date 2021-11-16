import React from 'react'
import { SiGmail } from 'react-icons/si'
import { GiRotaryPhone } from 'react-icons/gi'
import { AiFillLinkedin } from 'react-icons/ai'

export default function Connect() {
	return (
		<>
			<div className="connect" id="contacts">
				<div className="lets">
					<h3 className="contact-heading">Let's Connect</h3>
				</div>
				<div className="all-contacts">
					<div className="gmail contacts-container">
						<div className="icon-container">
							<SiGmail className="gmail-icon icon" />
						</div>
						<div className="link-container">
							<a href="#Gmail" className="connect-link link">
								fredgkimani@gmail.com
							</a>
						</div>
					</div>
					<div className="linkedin contacts-container">
						<div className="icon-container">
							<AiFillLinkedin className="linkedin-icon icon" />
						</div>
						<div className="link-container">
							<a
								href="https://www.linkedin.com/in/fredrick-gichuhi-7a5987212/"
								className="connect-link link">
								LinkedIn
							</a>
						</div>
					</div>
					<div className="phone contacts-container">
						<div className="icon-container">
							<GiRotaryPhone className="phone-icon icon" />
						</div>
						<div className="link-container">
							<a href="phone" className="connect-link link">
								+254726840609
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
