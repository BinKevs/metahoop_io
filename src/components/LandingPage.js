import React from "react";
import { Link } from "react-scroll";
import Navbar from "../static/Navbar.png";
import discord from "../static/discord.png";
import twitter from "../static/twitter.png";
import mobile_nav_close from "../static/mobile_nav_close-white.png";
import basketball_icon_light from "../static/basketball-icon-light-white.png";

import LandingLogo from "../static/Landing-Logo.png";
import LandingBG from "../static/Landing-Background.png";

import Jordan from "../static/Jordan.png";
import { Animated } from "react-animated-css";
import Typewriter from "typewriter-effect";

class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ShowNav: false };
	}
	setShowNav = (event) => {
		event.preventDefault();
		this.setState({
			ShowNav: !this.state.ShowNav,
		});
	};

	render() {
		const { ShowNav } = this.state;
		return (
			<>
				<div className="bg-landing-image bg-cover bg-center bg-no-repeat h-screen flex flex-col">
					{ShowNav ? (
						<Animated
							animationIn="fadeInRight"
							animationOut="fadeOutUp"
							animationInDuration={
								500
							}
							animationOutDuration={
								500
							}
							isVisible={ShowNav}
							id="LandingPage"
							className="md:hidden fixed w-full flex flex-col h-full bg-black z-30"
						>
							<div className="flex justify-between px-5 pt-10">
								{/* <img
									src={
										basketball_icon_light
									}
									className="absolute bottom-0 right-0 opacity-30 w-1/2"
									alt=""
								/> */}

								<img
									src={
										LandingLogo
									}
									alt=""
									class="w-32"
								/>
								<img
									onClick={
										this
											.setShowNav
									}
									src={
										mobile_nav_close
									}
									alt=""
									class="h-10"
								/>
							</div>
							<div className="font-Oswald font-bold text-white flex flex-col items-center text-xl space-y-8 m-auto cursor-pointer">
								<Link
									onClick={
										this
											.setShowNav
									}
									to="IntroPage"
									smooth={
										true
									}
									spy={
										true
									}
								>
									INTRO
								</Link>

								<Link
									onClick={
										this
											.setShowNav
									}
									to="ShowcasePage"
									smooth={
										true
									}
									spy={
										true
									}
								>
									SHOWCASE
								</Link>

								<Link
									onClick={
										this
											.setShowNav
									}
									to="RoadmapPage"
									smooth={
										true
									}
									spy={
										true
									}
								>
									ROADMAP
								</Link>
								<Link
									onClick={
										this
											.setShowNav
									}
									to="FAQPage"
									smooth={
										true
									}
									spy={
										true
									}
								>
									FAQ
								</Link>
								<Link
									onClick={
										this
											.setShowNav
									}
									to="TeamPage"
									smooth={
										true
									}
									spy={
										true
									}
								>
									TEAM
								</Link>
							</div>
						</Animated>
					) : (
						""
					)}

					<header class="text-white z-20">
						<div class="flex items-center lg:justify-center justify-between md:pt-10 pt-5 space-x-10">
							<a class="flex md:-mt-4">
								<img
									src={
										LandingLogo
									}
									alt=""
									class="md:h-24 h-auto md:w-full w-40 min-h-0 mx-5"
								/>
							</a>
							<div
								onClick={
									this
										.setShowNav
								}
								className="md:hidden flex p-5 mb-4"
							>
								<img
									src={
										Navbar
									}
									alt=""
									class="h-8 w-10"
								/>
							</div>
							<nav class="items-center text-lg justify-center font-Oswald font-bold hidden md:flex space-x-10 pb-8">
								<Link
									to="IntroPage"
									smooth={
										true
									}
									spy={
										true
									}
									className="cursor-pointer hover:text-orange-400 hover:text-2xl hover:tracking-widest"
								>
									INTRO
								</Link>

								<Link
									to="ShowcasePage"
									smooth={
										true
									}
									spy={
										true
									}
									className="cursor-pointer hover:text-orange-400 hover:text-2xl hover:tracking-widest"
								>
									SHOWCASE
								</Link>

								<Link
									to="RoadmapPage"
									smooth={
										true
									}
									spy={
										true
									}
									className="cursor-pointer hover:text-orange-400 hover:text-2xl hover:tracking-widest"
								>
									ROADMAP
								</Link>
								<Link
									to="FAQPage"
									smooth={
										true
									}
									spy={
										true
									}
									className="cursor-pointer hover:text-orange-400 hover:text-2xl hover:tracking-widest"
								>
									FAQ
								</Link>
								<Link
									to="TeamPage"
									smooth={
										true
									}
									spy={
										true
									}
									className="cursor-pointer hover:text-orange-400 hover:text-2xl hover:tracking-widest"
								>
									TEAM
								</Link>
								<a
									href="https://twitter.com/RoyalPangolins"
									target="_blank"
									class="mr-5 cursor-pointer"
								>
									<img
										className="h-8"
										src={
											twitter
										}
										alt=""
									/>
								</a>
								<a
									href="https://discord.gg/NbFSjgTd"
									target="_blank"
									class="cursor-pointer"
								>
									<img
										className="h-8"
										src={
											discord
										}
										alt=""
									/>
								</a>
							</nav>
						</div>
					</header>
					<div className="m-auto">
						<div className="flex flex-col justify-center w-full">
							<img
								src={Jordan}
								alt=""
								className="mx-auto md:w-48 w-32 mb-4 "
							/>
							<div className="flex text-white justify-center">
								<div className="text-center my-auto space-y-4">
									<div className="font-Oswald font-bold  md:text-2xl text-lg text-white">
										{" "}
										WELCOME
										TO
										<div className=" md:text-5xl text-3xl">
											<Typewriter
												options={{
													strings: [
														"<span class='text-orange-400'>META</span>",
														"HOOPS",
														"META<span class='text-orange-400'>HOOPS!</span>",
													],
													autoStart: true,
													loop: true,
												}}
											/>
										</div>
									</div>
									<div className="font-Oswald text-lg w-4/5 mx-auto">
										<div>
											Lorem
											ipsum
											dolor
											sit
											amet,
											consectetur
											adipisicing
											consectetur
											adipisicing
										</div>{" "}
									</div>
									<div>
										<button
											class={
												"p-4  hover:text-2xl text-md md:text-xl font-Oswald font-bold w-3/5 hover:w-4/6 md:mb-0 mb-10 bg-orange-primary-color hover:bg-orange-light-color text-white"
											}
										>
											MINT
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default LandingPage;
