import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BannerAboutUs from "./sections/aboutus/BannerAboutUs";
import DesriptionAboutUs from "./sections/aboutus/DesriptionAboutUs";
import TouristDestination from "./sections/aboutus/TouristDestination";
import VisiMisi from "./sections/aboutus/VisiMisi";
import "../styles/aboutus.css";

const AboutUs = () => {
	return (
		<>
			<Navbar/>
				<BannerAboutUs/>
				<DesriptionAboutUs/>
				<VisiMisi/>
				<TouristDestination/>
			<Footer/>
		</>
	);
}

export default AboutUs;