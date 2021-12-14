import chidori from "../static/irving.jfif";
import gonfreecs from "../static/irving.jfif";
import hagoromo from "../static/kobe.jfif";
import nofomo from "../static/kobe.jfif";
import ring_left from "../static/Ring-With-Body-Left.png";
import ring_right from "../static/Ring-With-Body-Right.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();
const Team = () => {
	return (
		<div
			id="TeamPage"
			className="md:bg-team-bg-image bg-team-bg-image-mobile bg-cover bg-center bg-no-repeat relative"
		>
			<div className="flex h-full md:h-screen">
				<div className="m-auto w-full">
					<div className="flex lg:justify-between justify-center lg:my-0 my-10 text-center font-Oswald font-semibold md:text-5xl text-2xl items-center text-orange-primary-color overflow-y-hidden">
						<img
							src={ring_left}
							className="md:w-1/6 w-1/3"
							alt=""
						/>
						<div>
							<span
								data-aos="fade-left"
								data-aos-delay="500"
							>
								METAHOOPS
							</span>{" "}
							<span
								data-aos="fade-right"
								data-aos-delay="500"
								data-aos-delay="150"
							>
								MYTICAL TEAM
							</span>
						</div>

						<img
							src={ring_right}
							className="md:w-1/6 w-1/3"
							alt=""
						/>
					</div>
					<div className="flex flex-col md:flex-row">
						<div className="md:w-1/4 w-full md:mb-0 mb-10 text-center">
							<img
								src={hagoromo}
								alt="..."
								className="shadow-lg mb-8 border-8 border-orange-primary-color w-full"
							/>
							<div className="font-Oswald font-semibold md:text-2xl text-xl text-black mb-2">
								IPSUM
							</div>
							<div className="font-Oswald font-light md:text-xl text-lg text-black">
								CEO / Developer
							</div>
						</div>
						<div className="md:w-1/4 w-full mb-10 text-center">
							<img
								src={hagoromo}
								alt="..."
								className="shadow-lg mb-8 border-8 border-orange-primary-color w-full"
							/>
							<div className="font-Oswald font-semibold md:text-2xl text-xl text-black mb-2">
								SED UT
							</div>
							<div className="font-Oswald font-light md:text-xl text-lg text-black">
								CEO / Developer
							</div>
						</div>
						<div className="md:w-1/4 w-full mb-10 text-center">
							<img
								src={chidori}
								alt="..."
								className="shadow-lg mb-8 border-8 border-orange-primary-color w-full"
							/>
							<div className="font-Oswald font-semibold md:text-2xl text-xl text-black mb-2">
								VOLUPTATEM
							</div>
							<div className="font-Oswald font-light md:text-xl text-lg text-black">
								Co-Developer
							</div>
						</div>
						<div className="md:w-1/4 w-full  mb-10 text-center">
							<img
								src={gonfreecs}
								alt="..."
								className="shadow-lg  mb-8 border-8 border-orange-primary-color w-full"
							/>
							<div className="font-Oswald font-semibold md:text-2xl text-xl text-black mb-2">
								CONSEQUATUR
							</div>
							<div className="font-Oswald font-light md:text-xl text-lg text-black">
								COO
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Team;
