import worthy from "../static/worthy.png";

const Intro = () => {
	return (
		<div id="IntroPage" className="bg-black h-screen flex">
			<div className="flex flex-col md:flex-row justify-center m-auto">
				<img
					className="md:w-auto w-48 md:mx-0 mx-auto"
					src={worthy}
					alt=""
				/>
				<div className=" m-auto flex flex-col items-center text-center text-white md:w-1/2 md:order-last order-first">
					<div className="font-Oswald font-bold text-orange-primary-color md:text-5xl text-3xl">
						METAHOOPS
					</div>
					<div className="font-Oswald font-bold md:text-5xl text-3xl mt-5">
						ARE HERE TO HOOP!
					</div>
					<div className="font-Oswald font-normal  md:text-3xl text-xl text-intro-second-text-color md:w-1/2 w-4/5 mt-5">
						Lorem ipsum dolor sit amet
						consectetur adipisicing elit.
						Sit,
					</div>
				</div>
			</div>
		</div>
	);
};
export default Intro;
