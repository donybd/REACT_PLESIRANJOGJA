import BootstrapClient from "../components/BootstrapClient";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import '../styles/homepage.css';
import Banner from "./sections/homepage/Banner";
import FavDestination from "./sections/homepage/FavDestination";
import Package from "./sections/homepage/Package";
import Testimonials from "./sections/homepage/Testimonials";
import TravelTrip from "./sections/homepage/TravelTrip";

const Homepage = () => {
	return (
		<>
			<BootstrapClient/>
			<Navbar/>
			<Banner/>
			<FavDestination/>
			<Package/>
			<Testimonials/>
			<TravelTrip/>
			<Footer/>
		</>
	);
}

export default Homepage;