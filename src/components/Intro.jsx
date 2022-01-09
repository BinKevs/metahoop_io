import worthy from "../static/worthy.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();
const Intro = () => {
	return (
		<div id="IntroPage" className="bg-black md:h-screen h-full flex">
			<div className="flex flex-col md:flex-row justify-center m-auto">
				<img
					className="md:w-auto w-48 md:mx-0 mx-auto"
					src={worthy}
					alt=""
				/>
				<div className=" m-auto flex flex-col items-center text-center text-white md:w-1/2 md:order-last order-first md:pt-0 pt-10 md:mx-0 mx-10">
					<div
						data-aos="fade-down"
						data-aos-delay="500"
						className="font-Oswald font-bold text-orange-primary-color md:text-5xl text-3xl"
					>
						METAHOOPS
					</div>
					<div
						data-aos="fade-up"
						data-aos-delay="500"
						className="font-Oswald font-bold md:text-5xl text-3xl mt-5"
					>
						ARE HERE TO HOOP!
					</div>
					<div
		
						className="font-Oswald font-normal  md:text-2xl text-md text-intro-second-text-color mt-5 flex flex-col md:flex-row w-full md:space-x-10 space-x-0 md:space-y-0 space-y-10"
					>
						<div data-aos="fade-up" className="text-justify">
						Our METAHOOPS website help to showcase the ongoing  road map of our goal to paint 1000 basketball courts across the world, and now mixing it with modern day visuals and culture. The important message is that when it comes to hoops, through our basketball passion based NFTs,  we are proof that every one can build a basketball court community of their dreams across the world. 
						</div>
						<div data-aos="fade-left" className="text-justify">
						METAHOOPS will provide collections of digital basketball accessories, fashion, music, and mural/graffiti art designs. People that buy NFTs from our Metahoops website get to own digital art that will continue to go up in value, by having a growing community giving back, being able to dedicate paint to mostly poor areas of the Philippines.
						</div>
						<div data-aos="fade-right" className="text-justify">
						And for every buyer of our tokens that become our partners in this METAHOOPS world, congratulations for you are part of a fun community that not only gives back to the less fortunate and will not stop until we had refurbished 1000 basketball courts around tne world, but we also get to see our potential to financially grow.
						</div>
					</div>
				</div>
				
			</div>
		</div>
	);
};
export default Intro;
