import Typewriter from "typewriter-effect";
import React, { useState } from "react";
import { Animated } from "react-animated-css";
const FAQ = () => {
	const [firstQ, setfirstQ] = useState(false);
	const [secondQ, setsecondQ] = useState(false);
	const [thirdQ, setthirdQ] = useState(false);
	const [fourtQ, setfourtQ] = useState(false);
	return (
		<div
			id="FAQPage"
			className="bg-FAQ-image bg-cover bg-center bg-no-repeat flex py-36"
		>
			<div className="flex justify-center m-auto">
				<div className=" m-auto flex flex-col items-center text-center text-white w-full">
					<div className="font-Oswald font-bold md:text-5xl text-3xl mt-5">
						FREQUENTLY ASKED QUESTIONS
					</div>
					<div className="space-y-10 md:text-2xl text-md md:w-full w-1/2">
						<div
							onClick={() =>
								setfirstQ(
									!firstQ
								)
							}
							className="cursor-pointer md:text-3xl text-xl font-Oswald text-intro-second-text-color w-full mt-5"
						>
							Lorem ipsum dolor sit
							amet consectetur?
						</div>

						<div>
							{firstQ ? (
								<>
									{/* <Typewriter
										options={{
											skipAddStyles: true,
											autoStart: true,
											loop: false,
											delay: 50,
										}}
										onInit={(
											typewriter
										) => {
											typewriter
												.typeString(
													'"sapiente omnis quidem autem consectetur mollitia deleniti,"'
												)
												.start();
										}}
									/> */}
									<Animated
										animationIn="fadeInDown"
										animationOut="fadeOutUp"
										animationInDuration={
											500
										}
										animationOutDuration={
											500
										}
										isVisible={
											firstQ
										}
										className={`font-Oswald font-normal md:text-lg text-sm text-FAQ-text-color md:w-full w-3/5 ${
											firstQ
												? ""
												: "hidden"
										}`}
									>
										"sapiente
										omnis
										quidem
										autem
										consectetur
										mollitia
										deleniti,"
									</Animated>
									<h2>
										|
										|
										|
									</h2>
								</>
							) : (
								""
							)}
						</div>

						<div
							onClick={() =>
								setsecondQ(
									!secondQ
								)
							}
							className="cursor-pointer md:text-3xl text-xl font-Oswald text-intro-second-text-color w-full mt-5"
						>
							Sed ut perspiciatis unde
							omnis iste natus error?
						</div>
						<div>
							{secondQ ? (
								<>
									{/* <Typewriter
										options={{
											autoStart: true,
											loop: false,
											delay: 50,
										}}
										onInit={(
											typewriter
										) => {
											typewriter
												.typeString(
													'"sapiente omnis quidem autem consectetur mollitia deleniti,"'
												)
												.start();
										}}
									/> */}
									<Animated
										animationIn="fadeInDown"
										animationOut="fadeOutUp"
										animationInDuration={
											500
										}
										animationOutDuration={
											500
										}
										isVisible={
											secondQ
										}
										className={`font-Oswald font-normal md:text-lg text-sm text-FAQ-text-color md:w-full w-3/5 ${
											secondQ
												? ""
												: "hidden"
										}`}
									>
										"sapiente
										omnis
										quidem
										autem
										consectetur
										mollitia
										deleniti,"
									</Animated>
									<h2>
										|
										|
										|
									</h2>
								</>
							) : (
								""
							)}
						</div>

						<div
							onClick={() =>
								setthirdQ(
									!thirdQ
								)
							}
							className="cursor-pointer md:text-3xl text-xl font-Oswald text-intro-second-text-color w-full mt-5"
						>
							magni dolores eos qui
							ratione voluptatem sequi
							nesciunt. Neque porro?
						</div>
						<div>
							{thirdQ ? (
								<>
									{/* <Typewriter
										options={{
											autoStart: true,
											loop: false,
											delay: 50,
										}}
										onInit={(
											typewriter
										) => {
											typewriter
												.typeString(
													'"sapiente omnis quidem autem consectetur mollitia deleniti,"'
												)
												.start();
										}}
									/> */}
									<Animated
										animationIn="fadeInDown"
										animationOut="fadeOutUp"
										animationInDuration={
											500
										}
										animationOutDuration={
											500
										}
										isVisible={
											thirdQ
										}
										className={`font-Oswald font-normal md:text-lg text-sm text-FAQ-text-color md:w-full w-3/5 ${
											thirdQ
												? ""
												: "hidden"
										}`}
									>
										"sapiente
										omnis
										quidem
										autem
										consectetur
										mollitia
										deleniti,"
									</Animated>
									<h2>
										|
										|
										|
									</h2>
								</>
							) : (
								""
							)}
						</div>

						<div
							onClick={() =>
								setfourtQ(
									!fourtQ
								)
							}
							className="cursor-pointer md:text-3xl text-xl font-Oswald text-intro-second-text-color w-full mt-5"
						>
							d ex ea commodi
							consequatur? Quis autem?
						</div>
						<div>
							{fourtQ ? (
								<>
									{/* <Typewriter
										options={{
											autoStart: true,
											loop: false,
											delay: 50,
										}}
										onInit={(
											typewriter
										) => {
											typewriter
												.typeString(
													'"sapiente omnis quidem autem consectetur mollitia deleniti,"'
												)
												.start();
										}}
									/> */}
									<Animated
										animationIn="fadeInDown"
										animationOut="fadeOutUp"
										animationInDuration={
											500
										}
										animationOutDuration={
											500
										}
										isVisible={
											fourtQ
										}
										className={`font-Oswald font-normal md:text-lg text-sm text-FAQ-text-color md:w-full w-3/5 ${
											fourtQ
												? ""
												: "hidden"
										}`}
									>
										"sapiente
										omnis
										quidem
										autem
										consectetur
										mollitia
										deleniti,"
									</Animated>
									<h2>
										|
										|
										|
									</h2>
								</>
							) : (
								""
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default FAQ;
