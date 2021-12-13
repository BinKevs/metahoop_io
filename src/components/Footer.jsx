import logo_footer from "../static/Landing-Logo.png";
const Footer = () => {
	return (
		<div className="bg-black  bg-cover bg-center bg-no-repeat">
			<div class="flex flex-col items-center justify-center py-16">
				<img src={logo_footer} alt="" class=" w-1/4" />
				<div className="font-Oswald font-semibold  md:text-xl text-sm text-white">
					Copyright 2021 - METAHOOPS!
				</div>
				<div></div>
			</div>
		</div>
	);
};
export default Footer;
