import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import BannerHotel from "./sections/hotel/BannerHotel";
import "../styles/hotel-payment-detail.css";
import { Link } from "react-router-dom";

const Accordian = () => {
	return (
		<div className="accordion">
			<Link to={`/detail-hotel-payment-2`} className="room-link">
				<div className="accordion-item">
					<button className="accordion-header">
						<span className="number">1.</span>
						<span className="title">Detail Reservation</span>
						{/* <i className="fas fa-caret-down"></i> */}
					</button>
				</div>
			</Link>
			<div className="accordion-item">
				<button className="accordion-header">
					<span className="number">2.</span>
					<span className="title">Personal Data</span>
					{/* <i className="fas fa-caret-down"></i> */}
				</button>
			</div>
			<div className="accordion-item">
				<button className="accordion-header">
					<span className="number">3.</span>
					<span className="title">Payment</span>
					{/* <i className="fas fa-caret-down"></i> */}
				</button>
			</div>
		</div>
	);
}

const DetailPaymentHotel = () => {
	return (
		<>
			<Navbar />
			<BannerHotel />
			<ProgressBar />
			<Accordian/>
			<Footer />
		</>
	);
}

export default DetailPaymentHotel;