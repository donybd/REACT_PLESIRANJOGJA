import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BannerCulture from "./sections/discover/BannerCulture";
import "../styles/discover/culture.css";
import CultureDescription from "./sections/discover/CultureDescription";
const Culture = () => {
	return (
		<>
			<Navbar/>
			<BannerCulture/>
			<CultureDescription/>
			<Footer/>
		</>
	);
}

export default Culture