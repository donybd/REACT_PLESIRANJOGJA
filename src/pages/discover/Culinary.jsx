import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import BannerCulinary from "../sections/discover/BannerCulinary";
import "../../styles/discover/culinary.css";
import CulinaryTitle from "../sections/discover/CulinaryTitle";
import FoodAndDrinkSwiper from "../sections/discover/FoodAndDrinkSwiper";

const Culinary = () => {
	return (
		<>
			<Navbar/>
			<BannerCulinary/>
			<CulinaryTitle/>
			<FoodAndDrinkSwiper/>
			<Footer/>
		</>
	);
}

export default Culinary;