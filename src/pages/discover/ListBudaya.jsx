import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import BannerListBudaya from "../sections/discover/BannerListBudaya";
import SectionListBudaya from "../sections/discover/SectionListBudaya";
import "../../styles/discover/culture.css";

const ListBudaya = () => {
	return (
		<>
			<Navbar/>
				<BannerListBudaya/>
				<SectionListBudaya/>
			<Footer/>
		</>
	);
}

export default ListBudaya;