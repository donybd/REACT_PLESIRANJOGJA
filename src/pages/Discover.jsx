import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BannerDiscover from "../pages/sections/discover/BannerDiscover";
import BootstrapClient from "../components/BootstrapClient";
import Title from "./sections/discover/Title";
import DestinationSlider from "./sections/discover/ListDestination";
import "../styles/discover/discover.css";

const Discover = () => {
	return (
		<>
			<BootstrapClient/>
			<Navbar />
			<BannerDiscover />
			<Title/>
			<DestinationSlider/>
			<Footer />
		</>
	);
};

export default Discover;
