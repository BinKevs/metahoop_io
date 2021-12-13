import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Roadmap from "./components/Roadmap";
import Showcase from "./components/Showcase";
import Team from "./components/Team";
import Intro from "./components/Intro";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<LandingPage />
			<Intro />
			<Showcase />
			<Roadmap />
			<FAQ />
			<Team />
			<Footer />
		</>
	);
}

export default App;
