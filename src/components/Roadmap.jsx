// import Roadmap_Pangolin from "../static_files/Roadmap_Pangolin.png";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ballIcon from "../static/basketball-icon.png";
const Roadmap = () => {
	return (
		<div
			id="RoadmapPage"
			className="bg-roadmap-image bg-cover bg-center bg-no-repeat relative md:p-32 p-0"
		>
			<div className="flex justify-center py-5">
				<div className="text-white font-Oswald font-bold md:text-5xl text-3xl">
					ROAD MAP
				</div>
			</div>
			<VerticalTimeline lineColor={"#FFFFFF"}>
				<VerticalTimelineElement
					position={"right"}
					className="vertical-timeline-element--work"
					contentStyle={{
						background: "#EE6730",
						color: "#FFFFFF",
					}}
					contentArrowStyle={{
						borderRight:
							"7px solid  #EE6730",
					}}
					icon={<img src={ballIcon} alt="" />}
					iconStyle={{
						background: "#EE6730",
						border: "7px solid #EEE6D3",
					}}
				>
					<h3 className="font-Oswald font-bold md:text-2xl text-lg">
						LOREM IPSUM IPSUM
					</h3>
					<p className="font-Oswald font-normal md:text-lg text-md">
						Lorem, ipsum dolor sit amet
						consectetur adipisicing elit.
						Natus eveniet aut inventore
						doloremque magnam hic sequi sunt
						illo consectetur quo sint,
						laboriosam accusamus, iusto ex,
						veniam dicta placeat quas omnis.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					position={"left"}
					className="vertical-timeline-element--work"
					contentStyle={{
						background: "#EE6730",
						color: "#FFFFFF",
					}}
					contentArrowStyle={{
						borderRight:
							"7px solid  #EE6730",
					}}
					icon={<img src={ballIcon} alt="" />}
					iconStyle={{
						background: "#EE6730",
						border: "7px solid #EEE6D3",
					}}
					//
				>
					<h3 className="font-Oswald font-bold md:text-2xl text-lg">
						LOREM IPSUM IPSUM
					</h3>
					<p className="font-Oswald font-normal md:text-lg text-md">
						Lorem ipsum dolor sit amet
						consectetur adipisicing elit.
						Laudantium, cumque quidem at,
						itaque dicta excepturi possimus
						tenetur eos obcaecati eveniet
						quas molestias pariatur, nostrum
						totam! Nemo quibusdam quaerat
						autem quas!
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					position={"right"}
					className="vertical-timeline-element--work"
					contentStyle={{
						background: "#EE6730",
						color: "#FFFFFF",
					}}
					contentArrowStyle={{
						borderRight:
							"7px solid  #EE6730",
					}}
					icon={<img src={ballIcon} alt="" />}
					iconStyle={{
						background: "#EE6730",
						border: "7px solid #EEE6D3",
					}}
					//
				>
					<h3 className="font-Oswald font-bold md:text-2xl text-lg">
						LOREM IPSUM IPSUM
					</h3>
					<p className="font-Oswald font-normal md:text-lg text-md">
						Lorem ipsum dolor sit, amet
						consectetur adipisicing elit.
						Placeat molestiae pariatur aut
						ipsam
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					position={"left"}
					className="vertical-timeline-element--work"
					contentStyle={{
						background: "#EE6730",
						color: "#FFFFFF",
					}}
					contentArrowStyle={{
						borderRight:
							"7px solid  #EE6730",
					}}
					icon={<img src={ballIcon} alt="" />}
					iconStyle={{
						background: "#EE6730",
						border: "7px solid #EEE6D3",
					}}
					//
				>
					<h3 className="font-Oswald font-bold md:text-2xl text-lg">
						LOREM IPSUM IPSUM
					</h3>
					<p className="font-Oswald font-normal md:text-lg text-md">
						repellat aperiam voluptatem
						dolor quis harum eum similique
						nihil exercitationem placeat
						illo, recusandae corrupti minus.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					position={"right"}
					className="vertical-timeline-element--work"
					contentStyle={{
						background: "#EE6730",
						color: "#FFFFFF",
					}}
					contentArrowStyle={{
						borderRight:
							"7px solid  #EE6730",
					}}
					icon={<img src={ballIcon} alt="" />}
					iconStyle={{
						background: "#EE6730",
						border: "7px solid #EEE6D3",
					}}
					//
				>
					<h3 className="font-Oswald font-bold md:text-2xl text-lg">
						LOREM IPSUM IPSUM
					</h3>
					<p className="font-Oswald font-normal md:text-lg text-md">
						repellat aperiam voluptatem
						dolor quis harum eum similique
						nihil exercitationem placeat
						illo, recusandae corrupti minus.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					position={"left"}
					className="vertical-timeline-element--work"
					contentStyle={{
						background: "#EE6730",
						color: "#FFFFFF",
					}}
					contentArrowStyle={{
						borderRight:
							"7px solid  #EE6730",
					}}
					icon={<img src={ballIcon} alt="" />}
					iconStyle={{
						background: "#EE6730",
						border: "7px solid #EEE6D3",
					}}
					//
				>
					<h3 className="font-Oswald font-bold md:text-2xl text-lg">
						LOREM IPSUM IPSUM
					</h3>
					<p className="font-Oswald font-normal md:text-lg text-md">
						Lorem ipsum dolor sit amet
						consectetur, adipisicing elit.
						Expedita magni libero tempore
						esse illum id
					</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
};
export default Roadmap;
